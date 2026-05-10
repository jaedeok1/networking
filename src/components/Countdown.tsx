"use client";

import { useEffect, useState } from "react";

function diff(iso: string) {
  const ms = new Date(iso).getTime() - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms / 3600000) % 24),
    m: Math.floor((ms / 60000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown({ iso }: { iso: string }) {
  const [t, setT] = useState(diff(iso));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const id = setInterval(() => setT(diff(iso)), 1000);
    return () => clearInterval(id);
  }, [iso]);

  if (!ready) return <span style={{ color: "var(--dim)" }}>—</span>;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span
      role="timer"
      aria-label={`마감까지 ${t.d}일 ${t.h}시간 ${t.m}분 ${t.s}초 남음`}
      aria-live="off"
      style={{
        fontVariantNumeric: "tabular-nums",
        fontWeight: 600,
        color: "var(--indigo)",
        letterSpacing: "0.02em",
      }}
    >
      {t.d > 0 && `${t.d}일 `}
      {pad(t.h)}:{pad(t.m)}:{pad(t.s)}
    </span>
  );
}
