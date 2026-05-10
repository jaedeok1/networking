"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface Item {
  q: string;
  a: string;
}

function FaqItem({ q, a, idx }: Item & { idx: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${idx}`;

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "var(--font)",
          fontSize: "var(--t-base)",
          fontWeight: 600,
          color: "var(--ink)",
          lineHeight: 1.5,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "var(--indigo)" : "var(--muted)",
            transition: "color 0.2s",
          }}
        >
          {open ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
        </span>
      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-btn`}
        style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p
          style={{
            paddingBottom: 20,
            fontSize: "var(--t-sm)",
            color: "var(--muted)",
            lineHeight: 1.75,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <FaqItem key={i} {...item} idx={i} />
      ))}
    </div>
  );
}
