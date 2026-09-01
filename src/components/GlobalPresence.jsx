import React, { useEffect, useRef } from 'react';
import './GlobalPresence.css';

const GlobalPresence = () => {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stage = stageRef.current;
    const hotspots = stage.querySelectorAll('.wp-hotspot');

    // Hotspot coordinates matching percent left/top
    const locations = [
      { name: 'Oman', xPct: 0.47, yPct: 0.28 },
      { name: 'Qatar', xPct: 0.19, yPct: 0.54 },
      { name: 'Kuwait', xPct: 0.33, yPct: 0.65 },
      { name: 'Bahrain', xPct: 0.50, yPct: 0.75 },
      { name: 'KSA', xPct: 0.60, yPct: 0.64 },
      { name: 'UAE', xPct: 0.66, yPct: 0.54, isHub: true },
      { name: 'India', xPct: 0.74, yPct: 0.58 },
      { name: 'China', xPct: 0.82, yPct: 0.48 }
    ];

    // Connection links radiating from the UAE Hub
    const connections = [];
    const hubLoc = locations.find(l => l.isHub);
    locations.forEach(loc => {
      if (loc !== hubLoc) {
        connections.push({
          from: hubLoc,
          to: loc,
          t: Math.random(),
          speed: 0.003 + Math.random() * 0.003
        });
      }
    });

    // Interaction ripples
    let ripples = [];

    function addRipple(x, y) {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 160,
        opacity: 0.75,
        speed: 2.8
      });
    }

    // Attach hover listeners to hotspots for interactive canvas ripples
    const handleMouseEnter = (idx) => {
      hotspots[idx].classList.add('active');
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      const x = locations[idx].xPct * w;
      const y = locations[idx].yPct * h;
      addRipple(x, y);
    };

    const handleMouseLeave = (idx) => {
      hotspots[idx].classList.remove('active');
    };

    hotspots.forEach((hs, idx) => {
      const hitbox = hs.querySelector('.wp-hotspot-hitbox');
      if (hitbox) {
        hitbox.addEventListener('mouseenter', () => handleMouseEnter(idx));
        hitbox.addEventListener('mouseleave', () => handleMouseLeave(idx));
      }
    });

    // Map boundary detection
    function inLand(nx, ny) {
      const blobs = [
        { cx: 0.09, cy: 0.08, rx: 0.05, ry: 0.06 }, { cx: 0.14, cy: 0.20, rx: 0.10, ry: 0.10 },
        { cx: 0.20, cy: 0.34, rx: 0.10, ry: 0.10 }, { cx: 0.24, cy: 0.48, rx: 0.06, ry: 0.06 },
        { cx: 0.27, cy: 0.62, rx: 0.07, ry: 0.09 }, { cx: 0.30, cy: 0.78, rx: 0.06, ry: 0.10 },
        { cx: 0.50, cy: 0.12, rx: 0.06, ry: 0.06 }, { cx: 0.55, cy: 0.20, rx: 0.05, ry: 0.05 },
        { cx: 0.53, cy: 0.38, rx: 0.07, ry: 0.09 }, { cx: 0.55, cy: 0.54, rx: 0.06, ry: 0.10 },
        { cx: 0.56, cy: 0.72, rx: 0.045, ry: 0.08 },
        { cx: 0.62, cy: 0.28, rx: 0.06, ry: 0.06 }, { cx: 0.68, cy: 0.20, rx: 0.09, ry: 0.08 },
        { cx: 0.78, cy: 0.16, rx: 0.10, ry: 0.09 }, { cx: 0.88, cy: 0.20, rx: 0.08, ry: 0.08 },
        { cx: 0.70, cy: 0.34, rx: 0.07, ry: 0.07 }, { cx: 0.80, cy: 0.36, rx: 0.09, ry: 0.08 },
        { cx: 0.90, cy: 0.40, rx: 0.07, ry: 0.07 }, { cx: 0.75, cy: 0.48, rx: 0.05, ry: 0.05 },
        { cx: 0.90, cy: 0.72, rx: 0.06, ry: 0.05 }
      ];
      for (const b of blobs) {
        const dx = (nx - b.cx) / b.rx, dy = (ny - b.cy) / b.ry;
        if (dx * dx + dy * dy <= 1) return true;
      }
      return false;
    }

    // Dot map array
    let dots = [];

    function initDots(w, h) {
      dots = [];
      const sp = Math.max(12, w / 95);
      const cols = Math.ceil(w / sp), rows = Math.ceil(h / sp);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * sp + (j % 2 ? sp / 2 : 0), y = j * sp;
          const nx = x / w, ny = y / h;
          if (!inLand(nx, ny)) continue;
          const n = Math.random();
          if (n < 0.12) continue;

          dots.push({
            x,
            y,
            baseRadius: n > 0.82 ? 1.6 : 1.1,
            opacity: 0.25 + Math.random() * 0.5,
            twinkleSpeed: (0.008 + Math.random() * 0.015) * (Math.random() > 0.5 ? 1 : -1),
            isBright: n > 0.82
          });
        }
      }
    }

    let animationFrameId;

    function animate() {
      const dpr = window.devicePixelRatio || 1;
      const w = stage.clientWidth, h = stage.clientHeight;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr; canvas.height = h * dpr;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        initDots(w, h);
      }

      ctx.clearRect(0, 0, w, h);

      // 1. Process active interaction ripples
      ripples = ripples.filter(r => {
        r.radius += r.speed;
        r.opacity = 1 - (r.radius / r.maxRadius);
        return r.radius < r.maxRadius;
      });

      // 2. Draw subtle starry background particles
      for (let k = 0; k < 45; k++) {
        const sx = (k * 7919) % w;
        const sy = (k * 104729) % h;
        ctx.beginPath();
        ctx.arc(sx, sy, 0.7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 198, 244, 0.1)';
        ctx.fill();
      }

      // 3. Update and draw world map dots
      dots.forEach(dot => {
        dot.opacity += dot.twinkleSpeed;
        if (dot.opacity > 0.85) {
          dot.opacity = 0.85;
          dot.twinkleSpeed = -Math.abs(dot.twinkleSpeed);
        } else if (dot.opacity < 0.2) {
          dot.opacity = 0.2;
          dot.twinkleSpeed = Math.abs(dot.twinkleSpeed);
        }

        let radius = dot.baseRadius;
        let alpha = dot.opacity;

        // Wave propagation interaction
        ripples.forEach(r => {
          const dx = dot.x - r.x;
          const dy = dot.y - r.y;
          const dist = Math.hypot(dx, dy);
          const waveDist = Math.abs(dist - r.radius);
          if (waveDist < 25) {
            const strength = (1 - waveDist / 25) * r.opacity;
            radius += strength * 1.6;
            alpha = Math.min(1, alpha + strength * 0.7);
          }
        });

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.isBright
          ? `rgba(143, 227, 255, ${alpha})`
          : `rgba(45, 95, 175, ${alpha * 0.7})`;
        ctx.fill();
      });

      // 4. Draw connectivity arcs & photons
      connections.forEach(conn => {
        const x1 = conn.from.xPct * w;
        const y1 = conn.from.yPct * h;
        const x2 = conn.to.xPct * w;
        const y2 = conn.to.yPct * h;

        // Bend the line upward for visual curvature
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dist = Math.hypot(x2 - x1, y2 - y1);
        const cx = mx;
        const cy = my - dist * 0.15;

        // Draw bezier arc line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cx, cy, x2, y2);
        ctx.strokeStyle = 'rgba(56, 198, 244, 0.13)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Photon positioning
        conn.t += conn.speed;
        if (conn.t > 1) {
          conn.t = 0;
          conn.speed = 0.003 + Math.random() * 0.003;
        }

        const t = conn.t;
        const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2;
        const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2;

        // Photon tail
        const tPrev = Math.max(0, t - 0.07);
        const pxPrev = (1 - tPrev) * (1 - tPrev) * x1 + 2 * (1 - tPrev) * tPrev * cx + tPrev * tPrev * x2;
        const pyPrev = (1 - tPrev) * (1 - tPrev) * y1 + 2 * (1 - tPrev) * tPrev * cy + tPrev * tPrev * y2;

        const grad = ctx.createLinearGradient(pxPrev, pyPrev, px, py);
        grad.addColorStop(0, 'rgba(143, 227, 255, 0)');
        grad.addColorStop(1, 'rgba(143, 227, 255, 1)');
        
        ctx.beginPath();
        ctx.moveTo(pxPrev, pyPrev);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Photon head
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      hotspots.forEach((hs, idx) => {
        const hitbox = hs.querySelector('.wp-hotspot-hitbox');
        if (hitbox) {
          hitbox.removeEventListener('mouseenter', () => handleMouseEnter(idx));
          hitbox.removeEventListener('mouseleave', () => handleMouseLeave(idx));
        }
      });
    };
  }, []);

  return (
    <section id="worldwide-presence">
      <div id="wp-stage" ref={stageRef}>
        <div id="wp-topbar"></div>
        <canvas id="dotmap" ref={canvasRef}></canvas>
        <div className="wp-title-wrap">
          <h2>Our <span className="wp-accent">Worldwide</span> Presence</h2>
        </div>
        {/* Oman */}
        <div className="wp-hotspot" style={{left: '47%', top: '28%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇴🇲 Oman</span>
          </div>
        </div>
        {/* Qatar */}
        <div className="wp-hotspot" style={{left: '19%', top: '54%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇶🇦 Qatar</span>
          </div>
        </div>
        {/* Kuwait */}
        <div className="wp-hotspot wp-dir-down" style={{left: '33%', top: '65%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇰🇼 Kuwait</span>
          </div>
        </div>
        {/* Bahrain */}
        <div className="wp-hotspot" style={{left: '50%', top: '75%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇧🇭 Bahrain</span>
          </div>
        </div>
        {/* KSA */}
        <div className="wp-hotspot wp-dir-down" style={{left: '60%', top: '64%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇸🇦 KSA</span>
          </div>
        </div>
        {/* UAE (Dubai) - Hub */}
        <div className="wp-hotspot" style={{left: '66%', top: '54%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇦🇪 UAE</span>
          </div>
        </div>
        {/* India */}
        <div className="wp-hotspot wp-dir-down" style={{left: '74%', top: '58%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇮🇳 India</span>
          </div>
        </div>
        {/* China */}
        <div className="wp-hotspot" style={{left: '82%', top: '48%'}}>
          <div className="wp-hotspot-hitbox"></div>
          <div className="wp-hotspot-pulse"></div>
          <div className="wp-hotspot-pulse-2"></div>
          <div className="wp-hotspot-core"></div>
          <div className="wp-hotspot-line"></div>
          <div className="wp-hotspot-text">
            <span className="wp-h-country">🇨🇳 China</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;

