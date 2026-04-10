"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  dir: number;
}

interface Meteor {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  alpha: number;
  timer: number;
  delay: number;
}

export function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const c = ctx;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const makeStars = (): Star[] =>
      Array.from({ length: 220 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.25 + 0.04,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));

    const newMeteor = (): Meteor => ({
      x: Math.random() * W * 1.3,
      y: Math.random() * H * 0.55 - 80,
      len: Math.random() * 220 + 100,
      speed: Math.random() * 9 + 7,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
      alpha: 0,
      timer: 0,
      delay: Math.floor(Math.random() * 180 + 10),
    });

    let stars = makeStars();
    const meteors: Meteor[] = Array.from({ length: 18 }, newMeteor);

    function draw() {
      c.clearRect(0, 0, W, H);

      // static twinkling stars
      for (const s of stars) {
        s.alpha += s.speed * 0.007 * s.dir;
        if (s.alpha >= 0.9) s.dir = -1;
        if (s.alpha <= 0.1) s.dir = 1;
        c.beginPath();
        c.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        c.fillStyle = `rgba(200,215,255,${s.alpha})`;
        c.fill();
      }

      // shooting meteors
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];
        m.timer++;
        if (m.timer < m.delay) continue;

        const progress = (m.timer - m.delay) / 60;
        m.alpha = progress < 0.3 ? progress / 0.3 : Math.max(0, 1 - (progress - 0.3) / 0.7);

        if (m.alpha > 0) {
          const dx = Math.cos(m.angle) * m.speed;
          const dy = Math.sin(m.angle) * m.speed;
          const tailX = m.x - Math.cos(m.angle) * m.len;
          const tailY = m.y - Math.sin(m.angle) * m.len;

          // trail gradient
          const g = c.createLinearGradient(tailX, tailY, m.x, m.y);
          g.addColorStop(0, "rgba(255,255,255,0)");
          g.addColorStop(0.6, `rgba(180,195,255,${m.alpha * 0.45})`);
          g.addColorStop(1, `rgba(255,255,255,${m.alpha * 0.95})`);

          c.beginPath();
          c.moveTo(tailX, tailY);
          c.lineTo(m.x, m.y);
          c.strokeStyle = g;
          c.lineWidth = 1.6;
          c.stroke();

          // glowing head
          const headGrad = c.createRadialGradient(m.x, m.y, 0, m.x, m.y, 7);
          headGrad.addColorStop(0, `rgba(255,255,255,${m.alpha})`);
          headGrad.addColorStop(0.4, `rgba(165,180,252,${m.alpha * 0.6})`);
          headGrad.addColorStop(1, "rgba(165,180,252,0)");
          c.beginPath();
          c.arc(m.x, m.y, 7, 0, Math.PI * 2);
          c.fillStyle = headGrad;
          c.fill();

          m.x += dx;
          m.y += dy;
        }

        if (m.x > W + 250 || m.y > H + 250 || (m.alpha <= 0 && m.timer > m.delay + 10)) {
          meteors[i] = newMeteor();
        }
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      stars = makeStars();
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
