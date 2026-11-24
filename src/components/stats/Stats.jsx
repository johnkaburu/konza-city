"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 800, max: 1000, prefix: "$", suffix: "M", label: "Million Dollars Committed" },
  { value: 68, max: 100, label: "Parcels Available" },
  { value: 53, max: 100, label: "Parcels Taken" },
  { value: 22, max: 100, label: "Parcels under Discussion" },
];

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function useCountUp(target, start, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);
  return count;
}

function StatRing({ value, max, prefix = "", suffix = "", label, start }) {
  const count = useCountUp(value, start);
  const offset = CIRCUMFERENCE * (1 - count / max);

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="relative h-40 w-40 sm:h-44 sm:w-44"
        role="img"
        aria-label={`${label}: ${prefix}${value}${suffix}`}
      >
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={RADIUS} fill="none" strokeWidth="8" className="stroke-white/10" />
          <circle
            cx="60"
            cy="60"
            r={RADIUS}
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="stroke-brand-light"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-white">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="mt-5 max-w-[12rem] text-sm font-medium uppercase tracking-wider text-white/70">
        {label}
      </p>
    </div>
  );
}

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl"
      />
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-brand-light">Konza in numbers</span>
          <h2 className="section-title mt-4 text-white">Momentum you can measure</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatRing key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
