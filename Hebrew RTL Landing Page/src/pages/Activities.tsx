import {
  CORAL, YELLOW, GREEN, BLUE, BLACK, WHITE, PAGE_BG, MUTED, BORDER,
  useViewport, IMG,
} from "../shared";

export default function Activities() {
  const vw = useViewport();
  const isMobile = vw < 768;
  const W = { maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" } as const;

  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{ backgroundColor: YELLOW, padding: isMobile ? "64px 0 60px" : "88px 0 80px" }}>
        <div style={W}>
          <div style={{ maxWidth: 640 }}>
            <div style={{
              display: "inline-flex", alignSelf: "flex-start",
              backgroundColor: "rgba(0,0,0,0.09)", borderRadius: 24, padding: "5px 14px",
              fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.68)",
              letterSpacing: "0.01em", marginBottom: 24,
            }}>הפעילויות שלנו</div>

            <h1 style={{
              fontSize: isMobile ? 40 : 56, fontWeight: 800, color: BLACK,
              lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.028em",
            }}>
              פעילויות ODT<br />
              לכל קבוצה
            </h1>

            <p style={{
              fontSize: 18, lineHeight: 1.7, color: "rgba(12,12,12,0.72)", margin: 0, maxWidth: 480,
            }}>
              כל פעילות מותאמת לגיל, למטרות ולצרכים הייחודיים של הקבוצה. אנחנו בונות יחד את החוויה המדויקת עבורכן.
            </p>
          </div>
        </div>
      </section>

      {/* ══ ACTIVITIES GRID ══ */}
      <section style={{ backgroundColor: PAGE_BG, padding: isMobile ? "72px 0" : "96px 0 104px" }}>
        <div style={W}>
          <div style={{ marginBottom: 44 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 34 : 44, fontWeight: 800, color: BLACK,
              margin: "0 0 10px", letterSpacing: "-0.022em", lineHeight: 1.1,
            }}>כל קבוצה והאתגר שלה</h2>
            <p style={{ fontSize: 18, color: MUTED, margin: 0, lineHeight: 1.6 }}>
              ימי הפעילויות שאנחנו מציעות
            </p>
          </div>

          <div className="activities-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }}>
            {[
              { title: "יום שיא ספורטיבי",        desc: "יום פעילויות ספורטיבי עוצמתי עם תחנות, אתגרים ועבודת צוות.",               img: IMG.card3, accent: CORAL },
              { title: "המרוץ למיליון", desc: "מרוץ משימות שכבתי מרגש ותחרותי שבסופו תוכרז הכיתה המנצחת.",                   img: IMG.card2, accent: BLUE  },
              { title: "פעילות ODT",    desc: "פעילויות שמוציאות את בתלמידים מחוץ למסכים ומפתחות יכולות הנהגה, שיתוף פעולה והעצמה אישית.",             img: IMG.card1, accent: GREEN },
            ].map(card => (
              <div key={card.title} className="activity-card" style={{
                backgroundColor: WHITE, borderRadius: 20, overflow: "hidden",
                border: `1px solid ${BORDER}`,
              }}>
                <div style={{ height: 242, overflow: "hidden", backgroundColor: "#9AADA4", position: "relative" }}>
                  <img src={card.img} alt={card.title} className="activity-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, backgroundColor: card.accent }} />
                </div>
                <div style={{ padding: "22px 24px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: card.accent, flexShrink: 0 }} />
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: BLACK, margin: 0, letterSpacing: "-0.015em" }}>{card.title}</h3>
                  </div>
                  <p style={{ fontSize: 15, color: MUTED, margin: 0, lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ LEVELS ══ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "72px 0" : "96px 0 104px" }}>
        <div style={W}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 34 : 44, fontWeight: 800, color: BLACK,
              margin: 0, letterSpacing: "-0.022em", lineHeight: 1.1,
            }}>למי זה מתאים?</h2>
          </div>

          <div className="levels-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }}>
            {[
             { level: "יסודי", ages: "כיתות א׳–ו׳", desc: "פעילויות ממוקדות בשיתוף פעולה, תקשורת וחיבור חברתי, מותאמות לגיל ולדינמיקה הכיתתית.", accent: CORAL, bg: "#FEF0EE" },
              { level: "על יסודי", ages: "כיתות ז׳–ט׳",  desc: "אתגרים שמפתחים מנהיגות, עצמאות וחשיבה תחת לחץ.",                        accent: GREEN, bg: "#EEF5EF" },
              { level: "תיכון",    ages: "כיתות י׳–י״ב", desc: "חוויות עמוקות שמחזקות קשרי חברות ומכינות לחיים מחוץ לכיתה.",            accent: BLUE,  bg: "#EDF0F6" },
            ].map(card => (
              <div key={card.level} className="level-card" style={{
                backgroundColor: WHITE, borderRadius: 20,
                border: `1.5px solid ${BORDER}`, borderTop: `5px solid ${card.accent}`, overflow: "hidden",
              }}>
                <div style={{ backgroundColor: card.bg, padding: "24px 28px 20px" }}>
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
      <section style={{ backgroundColor: PAGE_BG, padding: "40px 0 80px" }}>
        <div style={W}>
          <div className="cta-box" style={{
            backgroundColor: CORAL, borderRadius: 28,
            padding: isMobile ? "56px 28px" : "96px 80px",
            textAlign: "center",
          }}>
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              <h2 className="section-h2" style={{
                fontSize: isMobile ? 32 : 44, fontWeight: 800, color: WHITE,
                lineHeight: 1.12, margin: "0 0 36px", letterSpacing: "-0.025em",
              }}>
                מצאתן משהו שמתאים?<br />
                בואו נתכנן יחד.
              </h2>
              <button className="btn-cta">צרו קשר</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
