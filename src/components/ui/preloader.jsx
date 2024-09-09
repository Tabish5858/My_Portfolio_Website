import React, { useEffect, useRef } from "react";

const Preloader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let lines = [];
    const lineCount = 50;
    const maxSpeed = 1;
    const maxDistance = 100;
    const mouse = { x: undefined, y: undefined };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createLines = () => {
      lines = [];
      for (let i = 0; i < lineCount; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * maxSpeed,
          vy: (Math.random() - 0.5) * maxSpeed,
        });
      }
    };

    const drawLine = (line, color = "#00f0ff", thickness = 1) => {
      ctx.beginPath();
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x + 20, line.y + 20);
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.stroke();
    };

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        let dx = mouse.x - line.x;
        let dy = mouse.y - line.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          let moveAwayFactor = 1 + (maxDistance - distance) / maxDistance;
          line.vx = (line.vx + (dx / distance) * moveAwayFactor) * -1;
          line.vy = (line.vy + (dy / distance) * moveAwayFactor) * -1;
        }
        line.x += line.vx;
        line.y += line.vy;
        if (line.x > canvas.width || line.x < 0) {
          line.vx *= -1;
        }
        if (line.y > canvas.height || line.y < 0) {
          line.vy *= -1;
        }
        drawLine(line);
      });
    };

    const animate = () => {
      drawLines();
      requestAnimationFrame(animate);
    };

    const removePreloader = () => {
      document.querySelector(".preloader").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".preloader").remove();
        document.body.classList.remove("preloader-active");
      }, 500);
    };

    document.body.classList.add("preloader-active");
    resizeCanvas();
    createLines();
    animate();
    const timer = setTimeout(removePreloader, 4000);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="preloader">
      <canvas ref={canvasRef} className="preloader-canvas"></canvas>
      <h1 className="preloader-text">Tabish's Portfolio</h1>
    </div>
  );
};

export default Preloader;
