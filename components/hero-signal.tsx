"use client";

import { CSSProperties, useMemo, useState } from "react";

type SignalPoint = {
  x: number;
  y: number;
  delay: number;
};

const points: SignalPoint[] = [
  { x: 16, y: 24, delay: 0.1 },
  { x: 38, y: 15, delay: 0.18 },
  { x: 52, y: 42, delay: 0.25 },
  { x: 72, y: 34, delay: 0.33 },
  { x: 86, y: 62, delay: 0.42 },
  { x: 64, y: 74, delay: 0.5 },
  { x: 42, y: 62, delay: 0.58 },
  { x: 24, y: 70, delay: 0.66 }
];

export const HeroSignal = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const style = useMemo(
    () => ({
      "--signal-x": `${offset.x}px`,
      "--signal-y": `${offset.y}px`
    }) as CSSProperties,
    [offset.x, offset.y]
  );

  return (
    <div
      aria-hidden="true"
      style={style}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
        setOffset({ x, y });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="hero-signal relative h-56 overflow-hidden rounded-2xl border border-border/80 bg-surface/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,.22),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(34,211,238,.2),transparent_50%)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
        <polyline
          points={points.map((point) => `${point.x},${point.y}`).join(" ")}
          className="fill-none stroke-accent/70 stroke-[1.2]"
          vectorEffect="non-scaling-stroke"
        />
        {points.map((point) => (
          <g key={`${point.x}-${point.y}`}>
            <circle cx={point.x} cy={point.y} r="2.2" className="fill-accent" style={{ animationDelay: `${point.delay}s` }} />
            <circle cx={point.x} cy={point.y} r="4" className="signal-ring fill-none stroke-accent/45" style={{ animationDelay: `${point.delay}s` }} />
          </g>
        ))}
      </svg>
      <p className="absolute bottom-3 right-3 rounded-full border border-border/70 bg-surface/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted">
        Signal map · Live
      </p>
    </div>
  );
};
