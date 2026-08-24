import { useState, useEffect } from "react";

// ── Palette ────────────────────────────────────────────────────────────
export const CORAL   = "#F15746";
export const YELLOW  = "#FFC713";
export const GREEN   = "#608E65";
export const BLUE    = "#536B8E";
export const BLACK   = "#0C0C0C";
export const WHITE   = "#FFFFFF";
export const PAGE_BG = "#F2F1ED";
export const MUTED   = "#76726A";
export const BORDER  = "#E4E1D8";
export const DARK    = "#111110";

// ── Viewport hook ────────────────────────────────────────────────────────
export function useViewport() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1440);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

// ── Logo ─────────────────────────────────────────────────────────────────
export function ColorLogo({ size = 38 }: { size?: number }) {
  return (
    <img src="/assets/daec7.svg" alt="מחוץ למסכים לוגו"
      width={size} height={size} style={{ display: "block", flexShrink: 0 }} />
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────
export const icons = {
  team: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="4" stroke={c} strokeWidth="1.9" fill="none"/>
      <circle cx="20.5" cy="9" r="3.2" stroke={c} strokeWidth="1.7" fill="none" opacity=".65"/>
      <path d="M2 24c0-4.4 3.6-7.2 8-7.2s8 2.8 8 7.2" stroke={c} strokeWidth="1.9" strokeLinecap="round" fill="none"/>
      <path d="M20.5 17c2.8 0 5.5 1.6 5.5 6" stroke={c} strokeWidth="1.7" strokeLinecap="round" fill="none" opacity=".65"/>
    </svg>
  ),
  bulb: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C9.6 3 6 6.6 6 11c0 3 1.6 5.6 4 7.2V21h8v-2.8c2.4-1.6 4-4.2 4-7.2 0-4.4-3.6-8-8-8z" stroke={c} strokeWidth="1.9" fill="none"/>
      <line x1="10.5" y1="25" x2="17.5" y2="25" stroke={c} strokeWidth="1.9" strokeLinecap="round"/>
      <line x1="14" y1="7.5" x2="14" y2="13" stroke={c} strokeWidth="1.7" strokeLinecap="round" opacity=".7"/>
      <line x1="11" y1="10.5" x2="17" y2="10.5" stroke={c} strokeWidth="1.7" strokeLinecap="round" opacity=".7"/>
    </svg>
  ),
  speech: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="3" width="16" height="11" rx="3.5" stroke={c} strokeWidth="1.9" fill="none"/>
      <path d="M4.5 19.5l2.5-5.5h10" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="12" y="12" width="14" height="9.5" rx="3" stroke={c} strokeWidth="1.9" fill="none" opacity=".65"/>
      <path d="M22.5 21.5l-1.5 3" stroke={c} strokeWidth="1.9" strokeLinecap="round" opacity=".65"/>
    </svg>
  ),
  star: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M14 2.5l2.7 5.6 6.1.8-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6L5.2 8.9l6.1-.8L14 2.5z"
        stroke={c} strokeWidth="1.9" strokeLinejoin="round" fill="none"/>
      <circle cx="14" cy="23.5" r="1" fill={c} opacity=".4"/>
    </svg>
  ),
  heart: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M14 22.5C14 22.5 4 16 4 9.5C4 6.5 6.5 4 9.5 4C11.2 4 12.8 4.8 14 6C15.2 4.8 16.8 4 18.5 4C21.5 4 24 6.5 24 9.5C24 16 14 22.5 14 22.5Z"
        stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  target: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="1.9" fill="none"/>
      <circle cx="14" cy="14" r="6" stroke={c} strokeWidth="1.7" fill="none" opacity=".65"/>
      <circle cx="14" cy="14" r="2.5" fill={c} opacity=".7"/>
    </svg>
  ),
  sparkle: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L15.5 11L24 12.5L15.5 14L14 22L12.5 14L4 12.5L12.5 11L14 3Z"
        stroke={c} strokeWidth="1.9" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  eye: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M2 14C2 14 6 6 14 6C22 6 26 14 26 14C26 14 22 22 14 22C6 22 2 14 2 14Z"
        stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="14" cy="14" r="3.5" stroke={c} strokeWidth="1.9" fill="none"/>
    </svg>
  ),
  check: (c: string) => (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M5 14.5L10.5 20L23 8" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

// ── Images ────────────────────────────────────────────────────────────────
export const IMG = {
  hero:     "https://images.unsplash.com/photo-1758272959288-85a7bf04967c?w=900&h=740&fit=crop&auto=format&q=82",
  card1:    "https://images.unsplash.com/photo-1776243773206-a29b683c97fb?w=640&h=420&fit=crop&auto=format&q=80",
  card2:    "https://images.unsplash.com/photo-1780991415059-ade3b20aecec?w=640&h=420&fit=crop&auto=format&q=80",
  card3:    "https://images.unsplash.com/photo-1758272959663-b30513083206?w=640&h=420&fit=crop&auto=format&q=80",
  founders: "https://images.unsplash.com/photo-1770564512458-90ffbb0fd722?w=800&h=700&fit=crop&auto=format&q=82",
  shaked: "/assets/shaked.jpg",
  noy:      "https://images.unsplash.com/photo-1786641982481-9acdde44bbb2?w=520&h=640&fit=crop&auto=format&q=82",
  story:    "https://images.unsplash.com/photo-1680988632972-a0b59f378ec8?w=800&h=600&fit=crop&auto=format&q=82",
  gallery1: "https://images.unsplash.com/photo-1776243321350-9a1678266e06?w=900&h=680&fit=crop&auto=format&q=82",
  gallery2: "https://images.unsplash.com/photo-1533222535026-754c501569dd?w=480&h=380&fit=crop&auto=format&q=80",
  gallery3: "https://images.unsplash.com/photo-1758272959288-85a7bf04967c?w=480&h=380&fit=crop&auto=format&q=80",
  gallery4: "https://images.unsplash.com/photo-1776530754319-5ed60dd208b4?w=480&h=380&fit=crop&auto=format&q=80",
};

// ── Global CSS ───────────────────────────────────────────────────────────
export const GLOBAL_CSS = `
  *,*::before,*::after{box-sizing:border-box}
  ::selection{background:${YELLOW};color:${BLACK}}

  /* ── Focus ring — accessibility ── */
  :focus-visible {
    outline: 3px solid ${YELLOW};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* ── Buttons ── */
  .btn-primary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 52px; padding: 0 32px;
    background: ${BLACK}; color: ${WHITE};
    border: 2px solid ${BLACK}; border-radius: 10px;
    font-family: 'Assistant', sans-serif; font-size: 16px; font-weight: 700;
    cursor: pointer; letter-spacing: -0.01em;
    transition: background 200ms ease, color 200ms ease, transform 160ms ease, box-shadow 200ms ease;
    white-space: nowrap; text-decoration: none;
  }
  .btn-primary:hover { background: ${WHITE}; color: ${BLACK}; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.14); }
  .btn-primary:active { transform: translateY(0); box-shadow: none; }

  .btn-secondary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 52px; padding: 0 28px;
    background: transparent; color: ${BLACK};
    border: 1.5px solid rgba(0,0,0,0.25); border-radius: 10px;
    font-family: 'Assistant', sans-serif; font-size: 15px; font-weight: 600;
    cursor: pointer; letter-spacing: -0.01em;
    transition: background 200ms ease, border-color 200ms ease, transform 160ms ease;
    white-space: nowrap; text-decoration: none;
  }
  .btn-secondary:hover { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.4); transform: translateY(-1px); }
  .btn-secondary:active { transform: translateY(0); }

  .btn-cta {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 54px; padding: 0 38px;
    background: ${BLACK}; color: ${WHITE};
    border: 2px solid ${BLACK}; border-radius: 10px;
    font-family: 'Assistant', sans-serif; font-size: 16px; font-weight: 700;
    cursor: pointer; letter-spacing: -0.01em;
    transition: background 200ms ease, color 200ms ease, transform 160ms ease, box-shadow 200ms ease;
    white-space: nowrap; box-shadow: 0 4px 20px rgba(0,0,0,0.22); text-decoration: none;
  }
  .btn-cta:hover { background: ${WHITE}; color: ${BLACK}; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.16); }
  .btn-cta:active { transform: translateY(0); box-shadow: 0 2px 10px rgba(0,0,0,0.18); }

  .btn-header {
    display: inline-flex; align-items: center; justify-content: center;
    height: 38px; padding: 0 20px;
    background: ${BLACK}; color: ${WHITE};
    border: 2px solid ${BLACK}; border-radius: 8px;
    font-family: 'Assistant', sans-serif; font-size: 14px; font-weight: 700;
    cursor: pointer; transition: background 180ms ease, color 180ms ease, transform 160ms ease;
    white-space: nowrap; letter-spacing: -0.01em;
  }
  .btn-header:hover { background: ${WHITE}; color: ${BLACK}; transform: translateY(-1px); }
  .btn-header:active { transform: translateY(0); }

  /* ── Navigation ── */
  .nav-link {
    font-family: 'Assistant', sans-serif; font-size: 15px; font-weight: 500;
    color: ${BLACK}; text-decoration: none; opacity: 0.55;
    transition: opacity 180ms ease;
    position: relative; padding-bottom: 2px;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: -2px; right: 0; left: 0;
    height: 2px; background: ${BLACK}; border-radius: 2px;
    transform: scaleX(0); transform-origin: right;
    transition: transform 220ms ease;
  }
  .nav-link:hover { opacity: 1; }
  .nav-link:hover::after { transform: scaleX(1); }
  .nav-link.active { opacity: 1; font-weight: 700; }
  .nav-link.active::after { transform: scaleX(1); }

  /* ── Mobile nav drawer ── */
  .mobile-nav-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.45);
    z-index: 299; opacity: 0; pointer-events: none;
    transition: opacity 280ms ease;
    backdrop-filter: blur(2px);
  }
  .mobile-nav-overlay.open { opacity: 1; pointer-events: all; }

  .mobile-nav-drawer {
    position: fixed; top: 0; left: 0; bottom: 0;
    width: min(320px, 85vw);
    background: ${WHITE}; z-index: 300;
    padding: 24px 28px 40px;
    display: flex; flex-direction: column;
    transform: translateX(-100%);
    transition: transform 320ms cubic-bezier(0.32, 0, 0.15, 1);
    box-shadow: 4px 0 32px rgba(0,0,0,0.12);
  }
  .mobile-nav-drawer.open { transform: translateX(0); }

  .mobile-nav-link {
    font-family: 'Assistant', sans-serif; font-size: 20px; font-weight: 600;
    color: ${BLACK}; text-decoration: none; opacity: 0.6;
    padding: 14px 0; border-bottom: 1px solid ${BORDER};
    transition: opacity 160ms ease, padding-right 200ms ease;
    display: block;
  }
  .mobile-nav-link:hover { opacity: 1; padding-right: 8px; }
  .mobile-nav-link.active { opacity: 1; font-weight: 800; color: ${BLACK}; }

  /* ── Cards ── */
  .skill-card {
    transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
  }
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.1);
    border-color: rgba(0,0,0,0.12) !important;
  }

  .activity-card { transition: transform 240ms ease, box-shadow 240ms ease; }
  .activity-card:hover { transform: translateY(-5px); box-shadow: 0 24px 56px rgba(0,0,0,0.13); }
  .activity-card:hover .activity-img { transform: scale(1.06); }
  .activity-img { transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94); }

  .level-card { transition: transform 240ms ease, box-shadow 240ms ease; }
  .level-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px rgba(0,0,0,0.11); }

  .profile-card { transition: transform 240ms ease, box-shadow 240ms ease; }
  .profile-card:hover { transform: translateY(-5px); box-shadow: 0 28px 64px rgba(0,0,0,0.13); }

  .gallery-item { overflow: hidden; border-radius: 16px; cursor: default; }
  .gallery-item img { transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); width: 100%; height: 100%; object-fit: cover; display: block; }
  .gallery-item:hover img { transform: scale(1.05); }

  /* ── Footer ── */
  .footer-link {
    color: rgba(255,255,255,0.4); text-decoration: none;
    transition: color 180ms ease, opacity 180ms ease;
    font-family: 'Assistant', sans-serif;
  }
  .footer-link:hover { color: ${WHITE}; }

  /* ── Tag pill ── */
  .tag-pill {
    display: inline-flex; align-items: center; align-self: flex-start;
    background: rgba(0,0,0,0.09); border-radius: 24px; padding: 5px 15px;
    font-size: 13px; font-weight: 600; color: rgba(0,0,0,0.65); letter-spacing: 0.01em;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .hero-split { grid-template-columns: 46% 54% !important; }
    .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .activities-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .steps-grid { gap: 16px !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
    .about-profiles-grid { grid-template-columns: 1fr 1fr !important; }
  }

  @media (max-width: 768px) {
    .hero-split { grid-template-columns: 1fr !important; min-height: auto !important; }
    .hero-split-photo { order: -1; height: 340px !important; }
    .hero-h1 { font-size: 38px !important; line-height: 1.07 !important; }
    .about-h1 { font-size: 36px !important; }
    .section-h2 { font-size: 30px !important; }
    .section-h3 { font-size: 24px !important; }
    .skills-grid { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
    .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
    .activities-grid { grid-template-columns: 1fr !important; }
    .levels-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .section-py { padding-top: 64px !important; padding-bottom: 64px !important; }
    .cta-box { padding: 52px 24px !important; border-radius: 20px !important; }
    .steps-card { padding: 36px 20px 44px !important; border-radius: 18px !important; }
    .step-connector { display: none !important; }
    .btn-primary, .btn-secondary, .btn-cta { height: 50px !important; font-size: 15px !important; }
    .about-founders-grid { grid-template-columns: 1fr !important; }
    .about-profiles-grid { grid-template-columns: 1fr !important; }
    .about-story-grid { grid-template-columns: 1fr !important; }
    .about-gallery-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
    .about-gallery-main { grid-column: 1 / -1 !important; height: 240px !important; }
    .contact-hero-grid { grid-template-columns: 1fr !important; }
    .contact-cards-grid { grid-template-columns: 1fr !important; }
  }

  @media (max-width: 480px) {
    .skills-grid { grid-template-columns: 1fr !important; }
    .hero-h1 { font-size: 34px !important; }
    .section-h2 { font-size: 28px !important; }
    .steps-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
  }
`;
