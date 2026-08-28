"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyBar({
  applyUrl,
}: {
  applyUrl: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      role="banner"
      aria-label="빠른 신청"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: show ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
        background: "rgba(15,15,15,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "var(--t-sm)",
            color: "var(--ink)",
            fontFamily: "var(--font)",
          }}
        >
          IT인들의 놀이터 · 네트워킹 모임
        </span>

        <div style={{ display: "flex", gap: 8 }}>
          <a
            href={applyUrl}
            data-apply
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 16px",
              borderRadius: 999,
              background: "var(--indigo)",
              fontSize: "var(--t-sm)",
              fontWeight: 600,
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.15s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--indigo-d)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--indigo)";
            }}
          >
            신청하기
            <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
