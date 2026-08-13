import {
  ArrowRight,
  Clock4,
  Zap,
  Link2,
  Lightbulb,
  MessageSquare,
  Star,
  CheckCircle2,
} from "lucide-react";
import React from "react";
import StickyBar from "@/components/StickyBar";
import FaqAccordion from "@/components/FaqAccordion";
import Countdown from "@/components/Countdown";

/* ── 설정 ──────────────────────────────────────────── */
const APPLY        = "https://forms.gle/A6mTWDsRWqp9br457";
const CONTACT      = "https://open.kakao.com/o/sB3O6Dzh";
const DEADLINE_ISO = "2026-08-27T23:59:59+09:00";

/* ── 데이터 ────────────────────────────────────────── */
const WHY = [
  {
    Icon: Zap,
    title: "실무 인사이트를 직접",
    desc: "비슷한 연차, 직무, 관심사별로 대화하며 평소에는 얻지 못하는 진짜 이야기를 나눕니다.",
  },
  {
    Icon: Link2,
    title: "사이드 프로젝트 팀원 찾기",
    desc: "아이디어는 있는데 같이 만들 사람이 없다면 비슷한 고민을 가진 IT인이 한자리에 모입니다.",
  },
  {
    Icon: Lightbulb,
    title: "업계 트렌드를 한 발 앞서",
    desc: "다양한 직군의 시각으로 바라본 최신 IT 트렌드를 함께 이야기하고 나만의 인사이트를 만들어 갑니다.",
  },
];

const PROGRAM = [
  { n: "01", title: "첫 번째 라운드", tag: "입장순",    desc: "입장 순서대로 착석하여 처음 만나는 분들과 자연스럽게 대화를 시작합니다." },
  { n: "02", title: "두 번째 라운드", tag: "연차별",    desc: "나의 연차와 비슷한 분들로 자리를 구성하여 같은 시기를 겪어온 분들과 공감대 있는 이야기를 나눕니다." },
  { n: "03", title: "세 번째 라운드", tag: "직무별",    desc: "나와 같은 직무의 분들로 자리를 구성하여 직무 특화 고민과 인사이트를 깊게 나눌 수 있습니다." },
  { n: "04", title: "네 번째 라운드", tag: "관심사별",  desc: "AI, 이직, 인맥 확장, 업무 방식, 사이드 프로젝트 등 관심사별로 자리를 구성하여 진짜 하고 싶은 이야기를 나눕니다." },
];

const TESTIMONIALS = [
  {
    text: "처음엔 낯설까봐 걱정했는데 아이스브레이킹 덕에 금방 친해졌어요. 사이드 프로젝트 팀원도 여기서 찾았습니다.",
    name: "강 ○ 준", role: "백엔드 개발자 · 5년차",
  },
  {
    text: "다양한 직군 분들과 한자리에서 이야기 나눌 수 있어서 정말 좋았어요. 이직 준비에도 실질적인 도움이 됐습니다.",
    name: "이 ○ 나", role: "UX 디자이너 · 3년차",
  },
  {
    text: "IT인끼리 모이니까 대화 주제가 잘 통하고 자연스럽게 인사이트를 얻을 수 있었어요. 다음 모임도 무조건 참석합니다.",
    name: "박 ○ 혁", role: "스타트업 기획자",
  },
];

const TARGETS = [
  "개발자 · 디자이너 · 기획자 · PM 등 IT 업계 종사자",
  "IT 스타트업 창업 또는 이직을 고민 중인 분",
  "사이드 프로젝트 팀원이 필요한 분",
  "IT 인맥을 넓히고 싶은 누구나",
];

const FAQS = [
  { q: "처음 참석하는데 어색하지 않을까요?",
    a: "체계적으로 구성한 자리 배치로 처음 오시는 분도 자연스럽게 어울릴 수 있도록 설계했습니다. 참가자의 80% 이상이 처음 오시는 분들이며, 신입·직무 전환 등 다양한 배경의 분들이 모이기 때문에 걱정 안 하셔도 됩니다." },
  { q: "어떤 직군이 주로 참석하나요?",
    a: "개발자, 디자이너, 기획자, PM 등 다양한 IT 직군 분들이 고르게 참석합니다. 특정 직군만 오는 자리가 아닙니다." },
  { q: "참가비는 어떻게 납부하나요?",
    a: "신청하기를 클릭하여 카카오톡에 입장해주시면 참가비 납부 방식이 안내되어 있습니다." },
  { q: "취소 시 환불이 가능한가요?",
    a: "행사 2일 전까지 취소 요청 시 전액 환불됩니다. 이후 취소는 환불이 어려우니 일정을 먼저 확인해 주세요." },
];

/* ── 유틸 컴포넌트 ─────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return <p className="sec-label">{children}</p>;
}

export default function Page() {
  return (
    <>
      <StickyBar applyUrl={APPLY} />

      <main id="main">

        {/* ══ 1. HERO ══════════════════════════════════ */}
        <section
          aria-labelledby="hero-h1"
          style={{ borderBottom: "1px solid var(--border)", padding: "clamp(52px,9vw,104px) 0 clamp(48px,8vw,88px)" }}
        >
          <div className="wrap">
            <div className="anim-up" style={{ maxWidth: 600 }}>

              <p className="hero-label">Networking</p>

              <h1 id="hero-h1" className="hero-h1">
                IT인들이<br />만나는 곳
              </h1>

              <p className="hero-sub">
                개발자, 기획자, 디자이너 등 IT에 관심있는 누구나<br />
                직무와 연차를 넘어 솔직한 이야기를 나누고 연결되는 오프라인 네트워킹 모임입니다.
              </p>

              <div className="hero-divider" />

              {/* 행사 정보 테이블 */}
              <p className="info-section-label">행사 정보</p>
              <div className="info-table" role="list" aria-label="행사 기본 정보">
                {([
                  { label: "일시",   main: "8월 30일 (토)",        sub: "오후 2:00" },
                  { label: "장소",   main: "카페담 (선릉역 인근)",  sub: "서울 강남구 역삼동 690-11" },
                  { label: "참가비", main: "25,000원",              sub: null },
                  { label: "정원",   main: "선착순 20명",           sub: null },
                ] as { label: string; main: string; sub: string | null }[]).map(({ label, main, sub }) => (
                  <React.Fragment key={label}>
                    <p className="info-label" role="listitem">{label}</p>
                    <div className="info-value" role="listitem">
                      <strong>{main}</strong>
                      {sub && <span className="info-value-sub">{sub}</span>}
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* CTA */}
              <div className="hero-cta">
                <a href={APPLY} target="_blank" rel="noopener noreferrer"
                  className="btn btn-lg btn-primary" aria-label="카카오톡으로 신청하기">
                  지금 신청하기
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <div className="hero-countdown">
                  <Clock4 size={13} aria-hidden="true" />
                  마감까지&nbsp;
                  <Countdown iso={DEADLINE_ISO} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. 소셜 프루프 ════════════════════════════ */}
        <section aria-label="누적 통계" className="sec-sm" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
          <div className="wrap">
            <div className="stats-strip">
              {[
                { val: "200명+", label: "누적 참가자" },
                { val: "10회+",  label: "진행된 모임" },
                { val: "4.9",    label: "참가자 만족도 / 5" },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: "center", padding: "4px 0" }}>
                  <div className="stat-val">{val}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. Why Attend ════════════════════════════ */}
        <section aria-labelledby="why-h2" className="sec" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="wrap">
            <Label>Why Attend</Label>
            <h2 id="why-h2" className="sec-heading">
              참석해야 하는 이유
            </h2>

            <div className="why-grid">
              {WHY.map(({ Icon, title, desc }) => (
                <div key={title} className="why-card why-card-default">
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 20,
                    background: "var(--indigo-l)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={18} aria-hidden="true" color="var(--indigo)" />
                  </div>
                  <h3 style={{ fontSize: "var(--t-h3)", fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "var(--t-sm)", color: "var(--muted)", lineHeight: 1.75 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. 프로그램 ══════════════════════════════ */}
        <section aria-labelledby="prog-h2" className="sec" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="wrap">
            <Label>Program</Label>
            <h2 id="prog-h2" className="sec-heading">어떤식으로 진행되나요</h2>

            <ol role="list" style={{ listStyle: "none" }}>
              {PROGRAM.map(({ n, title, tag, desc }, i) => (
                <li key={n} className="program-row" style={{ borderBottom: i < PROGRAM.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div>
                    <div style={{ fontSize: "var(--t-xs)", fontWeight: 700, color: "var(--indigo)", letterSpacing: "0.06em" }} aria-hidden="true">{n}</div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <h3 style={{ fontSize: "var(--t-h3)", fontWeight: 700, color: "var(--ink)" }}>{title}</h3>
                      <span style={{
                        fontSize: "var(--t-xs)", fontWeight: 600,
                        color: "var(--indigo)", background: "var(--indigo-l)",
                        padding: "2px 8px", borderRadius: 999,
                        letterSpacing: "0.04em", whiteSpace: "nowrap",
                      }}>{tag}</span>
                    </div>
                    <p style={{ fontSize: "var(--t-sm)", color: "var(--muted)", lineHeight: 1.75 }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══ 5. 대상 & 후기 ════════════════════════════ */}
        <section className="sec" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px 56px" }}>

            {/* 대상 */}
            <div>
              <Label>Who</Label>
              <h2 className="sec-heading">이런 분들을<br />기다려요</h2>
              <ul role="list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {TARGETS.map((t) => (
                  <li key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "var(--t-sm)", color: "var(--ink)", lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} aria-hidden="true" style={{ color: "var(--indigo)", flexShrink: 0, marginTop: 3 }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* 후기 */}
            <div>
              <Label>Testimonials</Label>
              <h2 className="sec-heading">다녀온 분들의<br />이야기</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {TESTIMONIALS.map(({ text, name, role }) => (
                  <figure key={name} className="testimonial-card">
                    <div style={{ display: "flex", gap: 2, marginBottom: 10 }} aria-label="별점 5점">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} fill="var(--indigo)" color="var(--indigo)" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote>
                      <p style={{ fontSize: "var(--t-sm)", color: "var(--ink)", lineHeight: 1.75, marginBottom: 12 }}>
                        "{text}"
                      </p>
                    </blockquote>
                    <figcaption style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div aria-hidden="true" style={{
                        width: 28, height: 28, borderRadius: "50%",
                        background: "var(--indigo-l)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "var(--t-xs)", fontWeight: 700, color: "var(--indigo)", flexShrink: 0,
                      }}>{name[0]}</div>
                      <div>
                        <div style={{ fontSize: "var(--t-xs)", fontWeight: 700, color: "var(--ink)" }}>{name}</div>
                        <div style={{ fontSize: "var(--t-xs)", color: "var(--muted)" }}>{role}</div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. FAQ ═══════════════════════════════════ */}
        <section aria-labelledby="faq-h2" className="sec" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="wrap faq-grid">

            <div className="faq-sticky">
              <Label>FAQ</Label>
              <h2 id="faq-h2" className="sec-heading" style={{ marginBottom: 16 }}>
                자주 묻는<br />질문
              </h2>
            </div>

            <div>
              <FaqAccordion items={FAQS} />
            </div>
          </div>
        </section>

        {/* ══ 7. 최종 CTA ══════════════════════════════ */}
        <section aria-label="신청" style={{ background: "var(--indigo)", padding: "clamp(64px,10vw,104px) 0" }}>
          <div className="wrap cta-grid">
            <div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#0F0F0F", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 14 }}>
                지금 신청하면<br />자리를 확보할 수 있어요
              </h2>
              <p style={{ fontSize: "var(--t-sm)", color: "rgba(0,0,0,0.55)", lineHeight: 1.75 }}>
                8월 30일 토요일 · 오후 2시<br />
                카페담 (선릉역 인근) · 서울 강남구 역삼동 690-11 · 참가비 25,000원<br />
                <span style={{ color: "rgba(0,0,0,0.35)", fontSize: "var(--t-xs)", marginTop: 6, display: "block" }}>
                  행사 2일 전까지 취소 시 전액 환불
                </span>
              </p>
            </div>

            <div className="cta-btns">
              <a href={APPLY} target="_blank" rel="noopener noreferrer"
                className="btn btn-lg btn-primary-light" aria-label="카카오톡으로 신청하기">
                신청하기
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={CONTACT} target="_blank" rel="noopener noreferrer"
                className="btn btn-lg btn-ghost-inv" aria-label="카카오톡으로 문의하기">
                <MessageSquare size={15} aria-hidden="true" />
                카카오로 문의하기
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── 푸터 ─────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <p style={{ fontSize: "var(--t-sm)", fontWeight: 700, color: "var(--ink)", marginBottom: 2 }}>IT인들의 놀이터</p>
            <p style={{ fontSize: "var(--t-xs)", color: "var(--dim)" }}>궁금한 점은 카카오톡으로 문의해 주세요.</p>
          </div>
          <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="카카오톡으로 문의하기">
            카카오톡 문의
          </a>
        </div>
      </footer>
    </>
  );
}
