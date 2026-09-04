import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import './GlobalPresence.css';

const GlobalPresence = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    
    // clear previous if any
    d3.select(svgRef.current).selectAll('*').remove();
    
    const renderMap = async () => {
      const width = 1180, height = 620;
      const svg = d3.select(svgRef.current);
      
      const targetList = [
        {id:398,name:'Kazakhstan',    pt:[71.47,51.16]},
        {id:804,name:'Ukraine',       pt:[30.52,50.45]},
        {id:616,name:'Poland',        pt:[21.01,52.23]},
        {id:112,name:'Belarus',       pt:[27.57,53.90]},
        {id:860,name:'Uzbekistan',    pt:[69.24,41.30]},
        {id:356,name:'India',         pt:[77.20,28.60]},
        {id:144,name:'Sri Lanka',     pt:[79.85,6.93]},
        {id:586,name:'Pakistan',      pt:[73.05,33.68]},
        {id:524,name:'Nepal',         pt:[85.32,27.72]},
        {id:360,name:'Indonesia',     pt:[106.85,-6.20]},
        {id:764,name:'Thailand',      pt:[100.50,13.75]},
        {id:608,name:'Philippines',   pt:[120.98,14.60]},
        {id:36 ,name:'Australia',     pt:[149.13,-35.28]},
        {id:554,name:'New Zealand',   pt:[174.78,-41.29]},
        {id:231,name:'Ethiopia',      pt:[38.74,9.03]},
        {id:716,name:'Zimbabwe',      pt:[31.05,-17.83]},
        {id:404,name:'Kenya',         pt:[36.82,-1.29]},
        {id:710,name:'South Africa',  pt:[28.19,-25.75]},
        {id:818,name:'Egypt',         pt:[31.24,30.04]},
        {id:834,name:'Tanzania',      pt:[35.75,-6.16]},
        {id:372,name:'Ireland',       pt:[-6.26,53.35]},
        {id:826,name:'United Kingdom',pt:[-0.13,51.51]},
        {id:840,name:'United States', pt:[-77.04,38.90]},
        {id:124,name:'Canada',        pt:[-75.70,45.42]},
        {id:643,name:'Russia',        pt:[37.62,55.75]}
      ];
      const targetById = new Map(targetList.map(t => [t.id, t]));
      const HUB_ID = 784; // UAE
      const HUB_PT = [55.27, 25.20]; // Dubai

      try {
        const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const countries = topojson.feature(world, world.objects.countries);

        const projection = d3.geoNaturalEarth1().fitSize([width, height], countries);
        const path = d3.geoPath(projection);

        svg.append('g').selectAll('path')
          .data(countries.features)
          .join('path')
          .attr('class', d => {
            const id = +d.id;
            if(id === HUB_ID) return 'land hub-country';
            if(targetById.has(id)) return 'land on';
            return 'land';
          })
          .attr('d', path);

        const g = svg.append('g');
        const hubXY = projection(HUB_PT);

        // ---- label collision avoidance ----
        const placedRects = [];
        function rectsOverlap(a,b,pad){
          return !(a.x2+pad < b.x1 || a.x1-pad > b.x2 || a.y2+pad < b.y1 || a.y1-pad > b.y2);
        }
        function placeLabel(x0, y0, text){
          const w = text.length * 5.3 + 6;
          const h = 12;
          const preferLeft = x0 > width - 140;
          const baseDx = preferLeft ? -8 : 8;
          const baseDy = y0 < 42 ? 14 : -6;

          const candidateDys = [baseDy];
          for(let k=1; k<10; k++){
            candidateDys.push(baseDy + k*7);
            candidateDys.push(baseDy - k*7);
          }

          let chosen = null;
          for(const dy of candidateDys){
            const x1 = preferLeft ? x0 + baseDx - w : x0 + baseDx;
            const rect = { x1, y1:y0+dy-h+3, x2:x1+w, y2:y0+dy+3 };
            if(!placedRects.some(r => rectsOverlap(rect, r, 2))){
              chosen = { dx:baseDx, dy, rect, anchorEnd:preferLeft };
              break;
            }
          }
          if(!chosen){
            const x1 = preferLeft ? x0 + baseDx - w : x0 + baseDx;
            chosen = { dx:baseDx, dy:baseDy, rect:{x1,y1:y0+baseDy-h+3,x2:x1+w,y2:y0+baseDy+3}, anchorEnd:preferLeft };
          }
          placedRects.push(chosen.rect);
          return chosen;
        }

        placedRects.push({ x1:hubXY[0]-4, y1:hubXY[1]-22, x2:hubXY[0]+70, y2:hubXY[1]+4 });

        targetList.forEach(t => {
          const p = projection(t.pt);
          if(!p) return;
          const mx = (hubXY[0]+p[0])/2;
          const dx = p[0]-hubXY[0], dy = p[1]-hubXY[1];
          const dist = Math.sqrt(dx*dx+dy*dy);
          const arch = Math.min(dist*0.28, 110);
          const my = (hubXY[1]+p[1])/2 - arch;
          g.append('path')
            .attr('class','arc')
            .attr('d', `M${hubXY[0]},${hubXY[1]} Q${mx},${my} ${p[0]},${p[1]}`);
        });

        targetList.forEach(t => {
          const p = projection(t.pt);
          if(!p) return;
          const dg = g.append('g');
          dg.append('circle').attr('class','dot-outer').attr('cx',p[0]).attr('cy',p[1]).attr('r',6);
          dg.append('circle').attr('class','dot').attr('cx',p[0]).attr('cy',p[1]).attr('r',2.4);

          const lp = placeLabel(p[0], p[1], t.name);
          dg.append('text')
            .attr('class','dot-label')
            .attr('x', p[0] + lp.dx)
            .attr('y', p[1] + lp.dy)
            .attr('text-anchor', lp.anchorEnd ? 'end' : 'start')
            .text(t.name);
        });

        const hubG = g.append('g');
        hubG.append('circle').attr('class','hub-ring').attr('cx',hubXY[0]).attr('cy',hubXY[1]).attr('r',5);
        hubG.append('circle').attr('class','hub-dot').attr('cx',hubXY[0]).attr('cy',hubXY[1]).attr('r',4.5);
        hubG.append('text')
          .attr('class','hub-label')
          .attr('x', hubXY[0] + 9)
          .attr('y', hubXY[1] - 8)
          .text('Dubai, UAE');
          
      } catch (err) {
        console.error("Map load error", err);
      }
    };
    
    renderMap();
  }, []);

  return (
    <section className="global-presence-section">
      <div className="container gp-container">
        <div className="gp-header">
          <h2 className="gp-title">Our <span>Global Presence</span></h2>
          <p className="gp-desc">Building technology solutions for businesses across multiple markets, with a growing presence across the GCC, India, Kazakhstan, Ethiopia, and beyond.</p>
        </div>
        <div className="gp-map-container">
          <svg id="map-svg" ref={svgRef} viewBox="0 0 1180 620" preserveAspectRatio="xMidYMid meet"></svg>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
