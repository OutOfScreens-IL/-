import { useState, useRef } from "react";
import {
  CORAL, YELLOW, GREEN, BLUE, BLACK, WHITE, PAGE_BG, MUTED, BORDER,
  useViewport, icons,
} from "../shared";
import { projectId } from "../../utils/supabase/info";

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-3e74026d/contact-submit`;

const CONTACT_IMG = "https://images.unsplash.com/photo-1748698534492-746f3950d9ca?w=900&h=760&fit=crop&auto=format&q=85";

// ── Shared input style ───────────────────────────────────────────────────
function inputStyle(focused: boolean): React.CSSProperties {
  return {
    width: "100%",
    height: 52,
    padding: "0 14px",
    borderRadius: 10,
    border: `1.5px solid ${focused ? BLACK : BORDER}`,
    backgroundColor: WHITE,
    fontFamily: "'Assistant', sans-serif",
    fontSize: 15,
    fontWeight: 500,
    color: BLACK,
    direction: "rtl",
    textAlign: "right",
    outline: "none",
    transition: "border-color 180ms ease",
    boxSizing: "border-box",
  };
}

function selectStyle(focused: boolean): React.CSSProperties {
  return {
    ...inputStyle(focused),
    appearance: "none",
    WebkitAppearance: "none",
    cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%2376726A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 14px center",
  };
}

function labelStyle(): React.CSSProperties {
  return {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(12,12,12,0.75)",
    marginBottom: 7,
  };
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}
function Field({ label, children }: FieldProps) {
  return (
    <div>
      <label style={labelStyle()}>{label}</label>
      {children}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function Contact() {
  const vw = useViewport();
  const isMobile = vw < 768;
  const W = { maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" } as const;

  const formRef = useRef<HTMLDivElement>(null);

  // form state
  const [form, setForm] = useState({
    name: "", school: "", role: "", phone: "", email: "",
    city: "", grade: "", participants: "", date: "", focus: "", message: "",
    consent: false,
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (k: keyof typeof form, v: string | boolean) =>
    setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          school: form.school,
          role: form.role,
          city: form.city,
          grade: form.grade,
          participants: form.participants,
          date: form.date,
          focus: form.focus,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || "שגיאה בשליחה, נסו שוב");
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("לא ניתן להתחבר לשרת, בדקו את החיבור ונסו שוב");
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fi = (k: string) => focused === k;

  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: YELLOW,
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "48% 52%",
          alignItems: "center",
          minHeight: isMobile ? "auto" : "78vh",
        }}>
          {/* Text — right in RTL */}
          <div style={{
            padding: isMobile ? "64px 24px 52px" : "80px 56px 80px 40px",
          }}>
            <div style={{
              display: "inline-flex", alignSelf: "flex-start",
              backgroundColor: "rgba(0,0,0,0.09)", borderRadius: 24,
              padding: "5px 14px", fontSize: 13, fontWeight: 600,
              color: "rgba(0,0,0,0.7)", letterSpacing: "0.01em", marginBottom: 28,
            }}>בואו נצא לדרך</div>

            <h1 style={{
              fontSize: isMobile ? 38 : 54, fontWeight: 800, color: BLACK,
              lineHeight: 1.06, margin: "0 0 22px", letterSpacing: "-0.028em",
            }}>
              מתכננים פעילות?<br />
              בואו נדבר
            </h1>

            <p style={{
              fontSize: 17, lineHeight: 1.75, color: "rgba(12,12,12,0.72)",
              margin: "0 0 36px", maxWidth: 400,
            }}>
              השאירו לנו כמה פרטים, ואנחנו נחזור אליכן כדי להכיר, להבין מה הצוות או התלמידים צריכים ולבנות יחד את הפעילות המתאימה.
            </p>

            {/* 3 bullet points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: icons.target,  text: "התאמה לגיל ולמטרות הפעילות"  },
                { icon: icons.star,    text: "אפשרות לפעילות אצלכן"         },
                { icon: icons.heart,   text: "ליווי אישי משלב התכנון"       },
              ].map(item => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.09)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon(BLACK)}
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(12,12,12,0.78)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo — left in RTL */}
          <div style={{
            position: "relative",
            height: isMobile ? 320 : "100%",
            minHeight: isMobile ? 320 : 500,
            overflow: "hidden",
          }}>
            {/* Yellow blob */}
            <div style={{
              position: "absolute", bottom: -24, left: -24,
              width: 200, height: 200, borderRadius: "50%",
              backgroundColor: "rgba(255,199,19,0.3)", zIndex: 0,
            }} />
            {/* Coral square accent */}
            <div style={{
              position: "absolute", top: 36, left: 48,
              width: 52, height: 52, borderRadius: 12,
              backgroundColor: CORAL, opacity: 0.82,
              transform: "rotate(12deg)", zIndex: 0,
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              margin: isMobile ? "0 24px 32px" : "40px 0 40px 0",
              height: isMobile ? 280 : "calc(100% - 80px)",
              borderRadius: 22,
              overflow: "hidden",
              boxShadow: "0 20px 56px rgba(0,0,0,0.15)",
            }}>
              <img
                src={CONTACT_IMG}
                alt="שקד ונוי מובילות פעילות קבוצתית בשטח"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to right, transparent 55%, rgba(255,199,19,0.45) 100%)`,
                pointerEvents: "none",
              }} />
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. DIRECT CONTACT CARDS
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "64px 0" : "80px 0" }}>
        <div style={W}>
          <p style={{
            fontSize: 17, fontWeight: 600, color: MUTED,
            textAlign: "center", margin: "0 0 36px",
          }}>מעדיפות לדבר איתנו ישירות?</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: 20, maxWidth: 1000, margin: "0 auto",
          }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M17.6 14.8c-.4-.4-2.4-1.2-2.8-.8l-1.2 1.2c-.4.4-1.2.2-1.8-.4L10 13c-.6-.6-.8-1.4-.4-1.8l1.2-1.2c.4-.4-.4-2.4-.8-2.8C9.6 6.8 8 6 7.2 6.8L6 8c-1.2 1.2-.2 4.2 2.2 6.6S13.2 18 14.4 17.2l1.2-1.2c.8-.8 0-2.4-.4-2.8-.4-.4 0 0 0 0z" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                color: GREEN, bg: "#EEF5EF", border: "#CAE0CB",
                title: "WhatsApp",
                sub: "054-2301160",
                href: "https://wa.me/972542301160",
                ltr: true,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7 12.8 12.8 0 00.7 2.8 2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5 12.8 12.8 0 002.8.7A2 2 0 0122 16.9z" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                ),
                color: BLUE, bg: "#EDF0F6", border: "#C4CEDF",
                title: "טלפון",
                sub: "054-2301160",
                href: "tel:0542301160",
                ltr: true,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={CORAL} strokeWidth="1.8" fill="none"/>
                    <polyline points="22,6 12,13 2,6" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
                color: CORAL, bg: "#FEF0EE", border: "#F9D0CB",
                title: "אימייל",
                sub: "out.of.the.screen1@gmail.com",
                href: "mailto:out.of.the.screen1@gmail.com",
                ltr: true,
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#C13584" strokeWidth="1.8" fill="none"/>
                    <circle cx="12" cy="12" r="4.5" stroke="#C13584" strokeWidth="1.8" fill="none"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="#C13584"/>
                  </svg>
                ),
                color: "#C13584", bg: "#FDF0F8", border: "#F0C4E4",
                title: "Instagram",
                sub: "@outofthescreen_",
                href: "https://instagram.com/outofthescreen_",
                ltr: true,
              },
            ].map(card => (
              <a key={card.title} href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="skill-card"
                style={{
                  backgroundColor: WHITE,
                  border: `1.5px solid ${card.border}`,
                  borderRadius: 16,
                  padding: "24px 22px",
                  borderRight: `4px solid ${card.color}`,
                  textDecoration: "none",
                  display: "block",
                  cursor: "pointer",
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  backgroundColor: card.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14,
                }}>
                  {card.icon}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: BLACK, marginBottom: 6 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: MUTED, direction: card.ltr ? "ltr" : "rtl", textAlign: "right", wordBreak: "break-all" }}>{card.sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
