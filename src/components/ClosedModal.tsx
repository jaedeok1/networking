"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * 접수 마감 안내 모달.
 * - 페이지 진입 시 자동으로 노출
 * - `data-apply` 속성이 붙은 신청 링크를 클릭하면 이동을 막고 다시 노출
 */
export default function ClosedModal() {
  const [open, setOpen] = useState(true);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  /* 신청하기 링크 클릭 가로채기 */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.("[data-apply]");
      if (!target) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  /* 열려 있는 동안 ESC 닫기 + 배경 스크롤 잠금 */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="closed-modal-title"
      aria-describedby="closed-modal-desc"
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(4px)",
        animation: "fade-in 0.2s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "36px 28px 28px",
          textAlign: "center",
          fontFamily: "var(--font)",
          animation: "slide-up 0.35s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="닫기"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            border: "none",
            background: "transparent",
            color: "var(--muted)",
            cursor: "pointer",
          }}
        >
          <X size={18} aria-hidden="true" />
        </button>

        <span
          style={{
            display: "inline-block",
            fontSize: "var(--t-xs)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "var(--indigo)",
            background: "var(--indigo-l)",
            padding: "4px 12px",
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          CLOSED
        </span>

        <h2
          id="closed-modal-title"
          style={{
            fontSize: "1.375rem",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 12,
          }}
        >
          접수가 마감되었습니다
        </h2>

        <p
          id="closed-modal-desc"
          style={{
            fontSize: "var(--t-sm)",
            color: "var(--muted)",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          이번 모임은 정원이 모두 채워져
          <br />
          신청이 마감되었습니다.
          <br />
          다음 모임 소식은 카카오톡으로 안내드릴게요.
        </p>

        <button
          type="button"
          onClick={close}
          className="btn btn-lg btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
        >
          확인
        </button>
      </div>
    </div>
  );
}
