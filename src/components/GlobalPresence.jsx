import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './GlobalPresence.css';

const GlobalPresence = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const svgElement = mapRef.current;
    if (!svgElement) return;

    // Clear previous drawing if any
    d3.select(svgElement).selectAll("*").remove();

    let animationIntervals = [];

    const loadMap = async () => {
      try {
        /* =====================================================
           SVG
        ===================================================== */
        const svg = d3.select(svgElement);

        /* =====================================================
           STATIC MAP IMAGE BACKGROUND
        ===================================================== */
        svg.append("image")
          .attr("href", "/map.png")
          .attr("width", 1000)
          .attr("height", 620)
          .attr("x", 0)
          .attr("y", 0);

        /* =====================================================
           PROJECTION
           Matches the original world map projection
        ===================================================== */
        const projection = d3.geoNaturalEarth1()
          .scale(158)
          .translate([500, 310]);

        /* =====================================================
           LOCATIONS
           longitude, latitude
        ===================================================== */
        const places = {
          Dubai: { coordinates: [55.2708, 25.2048] },
          Kazakhstan: { coordinates: [-65.0, -35.0] }, // Moved to South America
          India: { coordinates: [78.9629, 20.5937] },
          Ethiopia: { coordinates: [15.0, 55.0] } // Moved to Europe
        };

        /* =====================================================
           PROJECT LOCATIONS
        ===================================================== */
        Object.values(places).forEach(place => {
          place.point = projection(place.coordinates);
        });

        const dubai = places.Dubai.point;
        const kazakhstan = places.Kazakhstan.point;
        const india = places.India.point;
        const ethiopia = places.Ethiopia.point;

        /* =====================================================
           CURVED ROUTE CREATOR
        ===================================================== */
        function makeCurve(start, end, curveAmount) {
          const x1 = start[0];
          const y1 = start[1];
          const x2 = end[0];
          const y2 = end[1];

          const dx = x2 - x1;
          const dy = y2 - y1;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const middleX = (x1 + x2) / 2;
          const middleY = (y1 + y2) / 2;
          const normalX = -dy / distance;
          const normalY = dx / distance;
          const controlX = middleX + normalX * curveAmount;
          const controlY = middleY + normalY * curveAmount;

          return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
        }

        /* =====================================================
           ROUTES
        ===================================================== */
        const indiaRoute = makeCurve(dubai, india, 45);
        const kazakhstanRoute = makeCurve(dubai, kazakhstan, 35);
        const ethiopiaRoute = makeCurve(dubai, ethiopia, 0);

        /* =====================================================
           ROUTE GLOW
        ===================================================== */
        [indiaRoute, kazakhstanRoute, ethiopiaRoute].forEach(route => {
          svg.append("path")
            .attr("class", "route-glow")
            .attr("d", route);
        });

        /* =====================================================
           ROUTE PATHS
        ===================================================== */
        const routeData = [
          { id: "route-india", path: indiaRoute },
          { id: "route-kazakhstan", path: kazakhstanRoute },
          { id: "route-ethiopia", path: ethiopiaRoute }
        ];

        routeData.forEach(route => {
          svg.append("path")
            .attr("id", route.id)
            .attr("class", "route-line")
            .attr("d", route.path);
        });

        /* =====================================================
           LOCATION MARKERS
        ===================================================== */
        function createMarker(point, pulse = true) {
          const group = svg.append("g");

          /* Very subtle pulse */
          if (pulse) {
            const pulseCircle = group.append("circle")
              .attr("class", "destination-pulse")
              .attr("cx", point[0])
              .attr("cy", point[1])
              .attr("r", 7);

            pulseCircle
              .append("animate")
              .attr("attributeName", "r")
              .attr("values", "7;15;7")
              .attr("dur", "2.2s")
              .attr("repeatCount", "indefinite");

            pulseCircle
              .append("animate")
              .attr("attributeName", "opacity")
              .attr("values", ".5;0;.5")
              .attr("dur", "2.2s")
              .attr("repeatCount", "indefinite");
          }

          /* Small center dot */
          group.append("circle")
            .attr("class", "destination-point")
            .attr("cx", point[0])
            .attr("cy", point[1])
            .attr("r", 6);
        }

        /* =====================================================
           LABELS
        ===================================================== */
        function createLabel(text, point, offsetX, offsetY) {
          const x = point[0] + offsetX;
          const y = point[1] + offsetY;
          const width = text.length * 7 + 25;

          const group = svg.append("g")
            .attr("transform", `translate(${x},${y})`);

          group.append("rect")
            .attr("class", "map-label-box")
            .attr("x", -width / 2)
            .attr("y", -15)
            .attr("width", width)
            .attr("height", 30)
            .attr("rx", 7);

          group.append("text")
            .attr("class", "map-label-text")
            .attr("text-anchor", "middle")
            .attr("y", 4)
            .text(text);
        }

        /* =====================================================
           MARKERS
        ===================================================== */
        createMarker(dubai);
        createMarker(kazakhstan);
        createMarker(india);
        createMarker(ethiopia);

        /* =====================================================
           LABEL POSITIONS
        ===================================================== */
        createLabel("KAZAKHSTAN", kazakhstan, 0, -35);
        createLabel("DUBAI", dubai, -5, -34);
        createLabel("INDIA", india, 37, -5);
        createLabel("ETHIOPIA", ethiopia, 0, 38);

        /* =====================================================
           MOVING DOT
        ===================================================== */
        function animateDot(routeId, duration) {
          // Use component scope select instead of document.getElementById
          const routeNode = d3.select(svgElement).select(`#${routeId}`).node();
          if (!routeNode) return;

          const dot = svg.append("circle")
            .attr("class", "travel-dot")
            .attr("r", 4);

          let isCancelled = false;
          
          function run() {
            if (isCancelled) return;
            const totalLength = routeNode.getTotalLength();

            dot
              .attr("cx", dubai[0])
              .attr("cy", dubai[1]);

            dot
              .transition()
              .duration(duration)
              .ease(d3.easeLinear)
              .attrTween("cx", function() {
                return function(t) {
                  const p = routeNode.getPointAtLength(t * totalLength);
                  return p.x;
                };
              })
              .attrTween("cy", function() {
                return function(t) {
                  const p = routeNode.getPointAtLength(t * totalLength);
                  return p.y;
                };
              })
              .on("end", run);
          }
          
          run();

          return () => { isCancelled = true; dot.interrupt(); };
        }

        /* =====================================================
           ALL THREE START TOGETHER
        ===================================================== */
        const cleanup1 = animateDot("route-india", 3200);
        const cleanup2 = animateDot("route-kazakhstan", 3200);
        const cleanup3 = animateDot("route-ethiopia", 3200);
        
        if (cleanup1) animationIntervals.push(cleanup1);
        if (cleanup2) animationIntervals.push(cleanup2);
        if (cleanup3) animationIntervals.push(cleanup3);

      } catch (err) {
        console.error("Error loading map", err);
      }
    };

    loadMap();
    
    return () => {
      animationIntervals.forEach(cleanup => cleanup && cleanup());
    };
  }, []);

  return (
    <section className="vision-section">
      {/* =========================
           LEFT SIDE
      ========================== */}
      <div className="vision-content">
        <h1 className="vision-title">
          Our <span>Global Presence</span>
        </h1>
        <p className="vision-description">
          Building technology solutions for businesses across multiple markets, with a growing presence across the GCC,
          India, Kazakhstan, Ethiopia, and beyond.
        </p>
      </div>

      {/* =========================
           MAP SIDE
      ========================== */}
      <div className="map-container">
        <svg
          id="worldMap"
          ref={mapRef}
          viewBox="0 0 1000 620"
        ></svg>
      </div>
    </section>
  );
};

export default GlobalPresence;
