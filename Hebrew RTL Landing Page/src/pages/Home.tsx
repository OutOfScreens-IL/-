import { Link } from "react-router";
import {
  CORAL, YELLOW, GREEN, BLUE, BLACK, WHITE, PAGE_BG, MUTED, BORDER,
  useViewport, icons,
} from "../shared";

export default function Home() {
  const vw = useViewport();
  const isMobile = vw < 768;
  const isTablet = vw < 1024;
  const W = { maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" } as const;

  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="hero-split"
        style={{
          backgroundColor: YELLOW,
          minHeight: isMobile ? "auto" : "calc(93vh - 68px)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "44% 56%",
          position: "relative",
          overflow: "hidden",
        }}>

        {/* Text */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: isMobile ? "56px 24px 52px" : isTablet ? "72px 40px 72px 28px" : "80px 56px 80px 36px",
          position: "relative", zIndex: 1,
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(12,12,12,0.3)", letterSpacing: "0.08em", marginBottom: 20 }}>
            בס״ד
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", alignSelf: "flex-start",
            backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 24, padding: "5px 14px",
            fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.65)", letterSpacing: "0.01em", marginBottom: 28,
          }}>פעילויות ODT לבתי ספר</div>

          <h1 className="hero-h1" style={{
            fontSize: isMobile ? 40 : isTablet ? 52 : 64,
            fontWeight: 800, color: BLACK,
            lineHeight: 1.04, margin: "0 0 20px", letterSpacing: "-0.032em",
          }}>
            יוצאים מהמסך,<br />
            מתחברים לחוויה
          </h1>

          <p style={{ fontSize: isMobile ? 17 : 18, lineHeight: 1.7, color: "rgba(12,12,12,0.68)", margin: "0 0 40px", maxWidth: 420 }}>
            פעילויות ODT וימי שיא, לצד מגוון רחב של חוויות שמחברות בין תלמידים דרך משחק, תנועה, שיתוף פעולה ואתגר.
          </p>


          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="btn-primary">צרו קשר עכשיו</Link>
            <Link to="/activities" className="btn-secondary">לכל הפעילויות</Link>
          </div>
        </div>

        {/* Photo */}
        <div className="hero-split-photo" style={{
          position: "relative",
          height: isMobile ? 360 : "100%",
          minHeight: isMobile ? 360 : 560,
          overflow: "hidden",
        }}>
          <img
            src="https://images.unsplash.com/photo-1776243321350-9a1678266e06?w=1400&h=1100&fit=crop&auto=format&q=85"
            alt="תלמידים בפעילות משיכת חבל קבוצתית בשטח פתוח"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, transparent 48%, rgba(255,199,19,0.6) 100%)`,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(12,12,12,0.18) 0%, transparent 36%)",
            pointerEvents: "none",
          }} />
          {!isMobile && (
            <div style={{
              position: "absolute", bottom: 32, right: 28,
              backgroundColor: "rgba(12,12,12,0.82)",
              backdropFilter: "blur(12px)",
              borderRadius: 14, padding: "12px 18px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", backgroundColor: YELLOW,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {icons.team(BLACK)}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: WHITE, lineHeight: 1.2 }}>פעילות מותאמת אישית</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>לכל שכבה לכל בית ספר</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══ SECTION 2 — מיומנויות ══ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "72px 0" : "96px 0 104px" }}>
        <div style={W}>
          <div style={{ marginBottom: isMobile ? 44 : 60, maxWidth: 600 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 30 : 44, fontWeight: 800, color: BLACK,
              margin: "0 0 14px", letterSpacing: "-0.024em", lineHeight: 1.1,
            }}>מה מחכה לכם מחוץ למסך?</h2>
            <p style={{ fontSize: 17, color: MUTED, margin: 0, lineHeight: 1.65 }}>
              כל פעילות בנויה לפתח מיומנויות חיים אמיתיות — שנשארות הרבה אחרי שהפעילות מסתיימת.
            </p>
          </div>

          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: isMobile ? 14 : 20 }}>
            {[
              { label: "עבודת צוות",         desc: "שיתוף פעולה ועבודה משותפת לאורך כל הדרך.",     icon: icons.team,   color: CORAL, bg: "#FEF0EE", border: "#F9D0CB" },
              { label: "חשיבה ופתרון בעיות", desc: "אתגרים שמפתחים חשיבה יצירתית בצוות.",          icon: icons.bulb,   color: GREEN, bg: "#EEF5EF", border: "#CAE0CB" },
              { label: "תקשורת",              desc: "תרגול תקשורת ברורה ואמפתית בין חברי הקבוצה.", icon: icons.speech, color: BLUE,  bg: "#EDF0F6", border: "#C4CEDF" },
              { label: "מנהיגות",             desc: "עידוד כל אחד לתרום, לקחת אחריות ולהוביל.",     icon: icons.star,   color: CORAL, bg: "#FEF0EE", border: "#F9D0CB" },
            ].map(item => (
              <div key={item.label} className="skill-card" style={{
                backgroundColor: WHITE, border: `1.5px solid ${item.border}`,
                borderRadius: 16, padding: isMobile ? "22px 18px" : "28px 24px",
                borderRight: `4px solid ${item.color}`,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", backgroundColor: item.bg,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                }}>
                  {item.icon(item.color)}
                </div>
                <h3 style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, color: BLACK, margin: "0 0 8px", lineHeight: 1.25 }}>{item.label}</h3>
                <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — איך זה עובד? ══ */}
      <section style={{ backgroundColor: PAGE_BG, padding: isMobile ? "64px 0" : "80px 0" }}>
        <div style={W}>
          <div className="steps-card" style={{
            backgroundColor: WHITE, borderRadius: 24,
            padding: isMobile ? "40px 24px 48px" : "64px 72px 72px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
          }}>
            <div style={{ marginBottom: isMobile ? 44 : 56, textAlign: "center" }}>
              <h2 className="section-h2" style={{
                fontSize: isMobile ? 30 : 44, fontWeight: 800, color: BLACK,
                margin: "0 0 10px", letterSpacing: "-0.024em", lineHeight: 1.1,
              }}>איך זה עובד?</h2>
              <p style={{ fontSize: 16, color: MUTED, margin: 0 }}>ארבעה שלבים פשוטים מהפנייה ועד החוויה</p>
            </div>

            <div style={{ position: "relative" }}>
              <div className="step-connector" style={{
                position: "absolute", top: 36, right: "12.5%", left: "12.5%",
                height: 0, borderTop: `2px dashed ${BORDER}`, zIndex: 0,
              }} />
              <div className="steps-grid" style={{
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                gap: 20, position: "relative", zIndex: 1,
              }}>
                {[
                  { n: "01", label: "יוצרים קשר",            desc: "פונים אלינו ומספרים לנו על הקבוצה.",   bg: CORAL,  fg: WHITE },
                  { n: "02", label: "בוחרים פעילות מתאימה",  desc: "מתאימים יחד פעילות לגיל ולמטרות.",     bg: GREEN,  fg: WHITE },
                  { n: "03", label: "יוצאים מהמסך",           desc: "יוצאים לשטח לחוויה בלתי נשכחת.",     bg: BLUE,   fg: WHITE },
                  { n: "04", label: "שומרים על הערכים",       desc: "מחזקים קשרים, מנהיגות ועבודת צוות.", bg: YELLOW, fg: BLACK },
                ].map(step => (
                  <div key={step.n} style={{ textAlign: "center" }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%", backgroundColor: step.bg,
                      margin: "0 auto 22px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: `0 8px 24px ${step.bg}55`,
                    }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: step.fg, letterSpacing: "-0.03em" }}>{step.n}</span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, color: BLACK, margin: "0 0 8px", lineHeight: 1.3 }}>{step.label}</h3>
                    <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.7, maxWidth: 160, marginLeft: "auto", marginRight: "auto" }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ SECTION 4 — למי זה מתאים? ══ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "72px 0" : "96px 0 104px" }}>
        <div style={W}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 44 : 56 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 30 : 44, fontWeight: 800, color: BLACK,
              margin: "0 0 12px", letterSpacing: "-0.024em", lineHeight: 1.1,
            }}>למי זה מתאים?</h2>
            <p style={{ fontSize: 17, color: MUTED, margin: 0 }}>פעילויות מותאמות לכל שכבות הגיל</p>
          </div>

          <div className="levels-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { level: "יסודי",    ages: "כיתות א׳–ו׳",  desc: "פעילויות ממוקדות בשיתוף פעולה, תקשורת וחיבור חברתי, מותאמות לגיל הרך.", accent: CORAL, bg: "#FEF0EE" },
              { level: "על יסודי", ages: "כיתות ז׳–ט׳",  desc: "אתגרים שמפתחים מנהיגות, עצמאות וחשיבה תחת לחץ.",                        accent: GREEN, bg: "#EEF5EF" },
              { level: "תיכון",    ages: "כיתות י׳–י״ב", desc: "חוויות עמוקות שמחזקות קשרי חברות ומכינות לחיים מחוץ לכיתה.",            accent: BLUE,  bg: "#EDF0F6" },
            ].map(card => (
              <div key={card.level} className="level-card" style={{
                backgroundColor: WHITE, borderRadius: 20,
                border: `1.5px solid ${BORDER}`, borderTop: `5px solid ${card.accent}`, overflow: "hidden",
              }}>
                <div style={{ backgroundColor: card.bg, padding: "24px 28px 20px", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: card.accent, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                    {card.ages}
                  </div>
                  <div style={{ fontSize: 52, fontWeight: 800, color: card.accent, lineHeight: 0.95, letterSpacing: "-0.035em" }}>
                    {card.level}
                  </div>
                </div>
                <div style={{ padding: "20px 28px 28px" }}>
                  <p style={{ fontSize: 15, color: MUTED, margin: 0, lineHeight: 1.75 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ backgroundColor: PAGE_BG, padding: isMobile ? "32px 0 72px" : "40px 0 88px" }}>
        <div style={W}>
          <div className="cta-box" style={{
            backgroundColor: CORAL, borderRadius: 28,
            padding: isMobile ? "56px 24px" : "96px 80px",
            position: "relative", overflow: "hidden", textAlign: "center",
          }}>
            <div style={{
              position: "absolute", top: -60, left: -60,
              width: 240, height: 240, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.06)", pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: -40,
              width: 180, height: 180, borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.06)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }}>
              <h2 className="section-h2" style={{
                fontSize: isMobile ? 30 : 46, fontWeight: 800, color: WHITE,
                lineHeight: 1.12, margin: "0 0 14px", letterSpacing: "-0.026em",
              }}>
                החוויה האמיתית מתחילה<br />מחוץ למסך.
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", margin: "0 0 40px", lineHeight: 1.65 }}>
                מנהלי בתי ספר ורכזים — בואו נבנה יחד את הפעילות המושלמת לקבוצה שלכן.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/contact" className="btn-cta">צרו קשר עכשיו</Link>
                <Link to="/activities" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: 54, padding: "0 28px",
                  background: "transparent", color: WHITE,
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  borderRadius: 10,
                  fontFamily: "'Assistant', sans-serif", fontSize: 15, fontWeight: 600,
                  cursor: "pointer", transition: "background 200ms ease, border-color 200ms ease",
                  whiteSpace: "nowrap", textDecoration: "none",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                  }}
                >
                  לכל הפעילויות
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
