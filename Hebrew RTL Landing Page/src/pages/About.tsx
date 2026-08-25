import {
  CORAL, YELLOW, GREEN, BLUE, BLACK, WHITE, PAGE_BG, MUTED, BORDER,
  useViewport, icons, IMG,
} from "../shared";

export default function About() {
  const vw = useViewport();
  const isMobile = vw < 768;
  const W = { maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" } as const;

  return (
    <>
      {/* ══════════════════════════════════════════
          1. FOUNDERS HERO
      ══════════════════════════════════════════ */}
      <section style={{
        backgroundColor: YELLOW,
        padding: isMobile ? "64px 0 0" : "0",
        overflow: "hidden",
      }}>
        <div className="about-founders-grid" style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "48% 52%",
          alignItems: "stretch",
          minHeight: isMobile ? "auto" : "80vh",
        }}>
          {/* Text — right column in RTL */}
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: isMobile ? "0 24px 60px" : "80px 56px 80px 40px",
          }}>
            {/* Tag */}
            <div style={{
              display: "inline-flex", alignSelf: "flex-start",
              backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 24, padding: "5px 14px",
              fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.72)",
              letterSpacing: "0.01em", marginBottom: 28,
            }}>נעים להכיר</div>

            <h1 className="about-h1" style={{
              fontSize: isMobile ? 38 : 52, fontWeight: 800, color: BLACK,
              lineHeight: 1.07, margin: "0 0 24px", letterSpacing: "-0.028em",
            }}>
              הסיפור של<br />
              מחוץ למסכים
            </h1>

            <p style={{
              fontSize: 17, lineHeight: 1.72, color: "rgba(12,12,12,0.72)",
              margin: "0 0 44px", maxWidth: 420,
            }}>
              מתוך אהבה לעבודה עם תלמידים ומתוך אמונה שחוויות משמעותיות נוצרות דווקא כשמניחים את המסכים בצד, יוצאים לשטח ופוגשים באמת אחד את השנייה.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary">בואו נכיר</button>
            </div>
          </div>

          {/* Photo — left column in RTL */}
          <div style={{
            position: "relative",
            height: isMobile ? 380 : "100%",
            minHeight: isMobile ? 380 : 520,
            overflow: "visible",
          }}>
            {/* Yellow blob behind photo */}
            <div style={{
              position: "absolute",
              bottom: -32, left: -32,
              width: 260, height: 260,
              borderRadius: "50%",
              backgroundColor: "rgba(255,199,19,0.35)",
              zIndex: 0,
            }} />
            {/* Coral accent shape */}
            <div style={{
              position: "absolute",
              top: 40, left: 60,
              width: 64, height: 64,
              borderRadius: 16,
              backgroundColor: CORAL,
              opacity: 0.85,
              zIndex: 0,
              transform: "rotate(14deg)",
            }} />

            {/* Main photo */}
            <div style={{
              position: "relative", zIndex: 1,
              margin: isMobile ? "0 24px" : "40px 0 40px 0",
              height: isMobile ? 340 : "calc(100% - 80px)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.16)",
            }}>
              <img
                src={IMG.founders}
                alt="שקד ונוי מייסדות מחוץ למסכים"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
              />
              {/* Founders label */}
              <div style={{
                position: "absolute", bottom: 20, right: 20,
                backgroundColor: "rgba(12,12,12,0.78)",
                backdropFilter: "blur(8px)",
                borderRadius: 10, padding: "8px 14px",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: WHITE, letterSpacing: "0.02em" }}>
                  מייסדות מחוץ למסכים
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. PROFILE CARDS
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: PAGE_BG, padding: isMobile ? "72px 0" : "100px 0" }}>
        <div style={W}>
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 64 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 34 : 44, fontWeight: 800, color: BLACK,
              margin: "0 0 14px", letterSpacing: "-0.022em", lineHeight: 1.1,
            }}>שתי נשים, מטרה משותפת אחת</h2>
            <p style={{ fontSize: 18, color: MUTED, margin: 0, lineHeight: 1.65, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              להפוך כל פעילות לחוויה שמחברת בין תלמידים ומשאירה משהו משמעותי גם אחרי שהיא מסתיימת.
            </p>
          </div>

          {/* Profile cards */}
          <div className="about-profiles-grid" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 28,
          }}>
            {/* Shaked */}
            <div className="profile-card" style={{
              backgroundColor: WHITE, borderRadius: 24,
              border: `1.5px solid ${BORDER}`,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}>
              {/* Color band */}
              <div style={{
                backgroundColor: "#FFF8DC",
                borderBottom: `4px solid ${YELLOW}`,
                position: "relative", overflow: "hidden",
                height: 280,
              }}>
                {/* Decorative circle */}
                <div style={{
                  position: "absolute", top: -40, left: -40,
                  width: 180, height: 180, borderRadius: "50%",
                  backgroundColor: "rgba(255,199,19,0.2)",
                }} />
                <img
                  src={IMG.shaked}
                  alt="שקד כהן - מייסדת מחוץ למסכים"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", position: "relative", zIndex: 1 }}
                />
                <div style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  background: `linear-gradient(to top, ${YELLOW}CC 0%, transparent 45%)`,
                }} />
              </div>

              <div style={{ padding: "28px 28px 32px" }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: BLACK, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                    שקד כהן
                  </h3>
                  <div style={{ fontSize: 14, fontWeight: 600, color: MUTED }}>מייסדת ומנחת פעילויות</div>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(12,12,12,0.68)", margin: "0 0 24px" }}>
                  בוגרת שירות צבאי משמעותי ומשרתת מילואים פעילה ביחידת דובדבן. בעלת ניסיון עשיר בהובלת תנועות נוער, התנדבויות בקהילה ובמשלחת "לוחמים ללא גבולות". דוגלת בחיבורים בין אנשים בחברה הישראלית.
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { label: "אנרגיה",         icon: icons.sparkle },
                    { label: "חיבור לאנשים",   icon: icons.heart   },
                    { label: "הובלת קבוצה",    icon: icons.star    },
                  ].map(tag => (
                    <div key={tag.label} style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      backgroundColor: "#FFF8DC", border: `1.5px solid ${YELLOW}`,
                      borderRadius: 20, padding: "5px 12px",
                      fontSize: 13, fontWeight: 600, color: "#7A5D00",
                    }}>
                      <span style={{ transform: "scale(0.72)", transformOrigin: "center" }}>{tag.icon(YELLOW)}</span>
                      {tag.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Noy */}
            <div className="profile-card" style={{
              backgroundColor: WHITE, borderRadius: 24,
              border: `1.5px solid ${BORDER}`,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                backgroundColor: "#FEF0EE",
                borderBottom: `4px solid ${CORAL}`,
                position: "relative", overflow: "hidden",
                height: 280,
              }}>
                <div style={{
                  position: "absolute", bottom: -40, right: -40,
                  width: 180, height: 180, borderRadius: "50%",
                  backgroundColor: "rgba(241,87,70,0.12)",
                }} />
                <img
                  src={IMG.noy}
                  alt="נוי ענבים - מייסדת מחוץ למסכים"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", position: "relative", zIndex: 1 }}
                />
                <div style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  background: `linear-gradient(to top, ${CORAL}CC 0%, transparent 45%)`,
                }} />
              </div>

              <div style={{ padding: "28px 28px 32px" }}>
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: BLACK, margin: "0 0 4px", letterSpacing: "-0.02em" }}>
                    נוי ענבים
                  </h3>
                  <div style={{ fontSize: 14, fontWeight: 600, color: MUTED }}>מייסדת ומנחת פעילויות</div>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(12,12,12,0.68)", margin: "0 0 24px" }}>
                  בעלת תואר ראשון בניהול מערכות מידע, עם ניסיון בהדרכה ועבודה עם ילדים ובני נוער. שירתה כמדריכת כושר קרבי בסיירת חרוב. בנוסף עבדה כסייעת בחטיבת ביניים וליוותה תלמידים בסביבה חינוכית וחברתית.
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { label: "יצירתיות",          icon: icons.bulb   },
                    { label: "הקשבה",              icon: icons.heart  },
                    { label: "חשיבה על הפרטים",    icon: icons.eye    },
                  ].map(tag => (
                    <div key={tag.label} style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      backgroundColor: "#FEF0EE", border: `1.5px solid ${CORAL}`,
                      borderRadius: 20, padding: "5px 12px",
                      fontSize: 13, fontWeight: 600, color: "#8B1A0E",
                    }}>
                      <span style={{ transform: "scale(0.72)", transformOrigin: "center" }}>{tag.icon(CORAL)}</span>
                      {tag.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. STORY — WHY WE STARTED
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "72px 0" : "104px 0" }}>
        <div style={W}>
          <div className="about-story-grid" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 72,
            alignItems: "center",
          }}>
            {/* Text */}
            <div>
              <div style={{
                display: "inline-flex", alignSelf: "flex-start",
                backgroundColor: YELLOW, borderRadius: 24, padding: "4px 14px",
                fontSize: 12, fontWeight: 700, color: "rgba(0,0,0,0.7)",
                letterSpacing: "0.02em", marginBottom: 24,
              }}>הסיפור שמאחורינו</div>

              <h2 className="section-h2" style={{
                fontSize: isMobile ? 32 : 40, fontWeight: 800, color: BLACK,
                margin: "0 0 24px", letterSpacing: "-0.022em", lineHeight: 1.1,
              }}>הכול התחיל<br />מערכים משותפים</h2>

              <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(12,12,12,0.7)", margin: "0 0 28px" }}>
                בעולם שבו חלק גדול מהתקשורת עובר דרך מסכים, רצינו ליצור מרחב אחר. מרחב שבו תלמידים זזים, משתפים פעולה, מתמודדים עם אתגרים, מגלים חוזקות חדשות ופוגשים את הקבוצה שלהם בדרך אחרת.
              </p>

              {/* Highlighted quote */}
              <div style={{
                backgroundColor: CORAL, borderRadius: 16,
                padding: "22px 24px",
                borderRight: `5px solid rgba(0,0,0,0.15)`,
              }}>
                <p style={{
                  fontSize: 17, fontWeight: 700, color: WHITE,
                  margin: 0, lineHeight: 1.55, fontStyle: "italic",
                }}>
                  "לא עוד יום פעילות שעובר — אלא חוויה שנשארת."
                </p>
              </div>
            </div>

            {/* Photo */}
            <div style={{ position: "relative" }}>
              {/* Accent bar */}
              <div style={{
                position: "absolute",
                top: 28, left: -16,
                width: 6, height: "calc(100% - 56px)",
                backgroundColor: YELLOW,
                borderRadius: 4,
                zIndex: 0,
              }} />
              <div style={{
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                position: "relative", zIndex: 1,
              }}>
                <img
                  src={IMG.story}
                  alt="קבוצת תלמידים בפעילות שטח"
                  style={{ width: "100%", height: isMobile ? 280 : 420, objectFit: "cover", objectPosition: "center 30%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. DEDICATION
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: PAGE_BG, padding: isMobile ? "72px 0" : "100px 0" }}>
        <div style={W}>
          <div style={{ maxWidth: 720 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 30 : 38, fontWeight: 800, color: BLACK,
              margin: "0 0 28px", letterSpacing: "-0.022em", lineHeight: 1.15,
            }}>
              העשייה שלנו מוקדשת לזכרן של<br />
              סבתותינו, שולמית וגלדיס
            </h2>

            <div style={{
              backgroundColor: WHITE,
              borderRadius: 20,
              padding: isMobile ? "32px 24px" : "40px 52px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.055), 0 0 0 1px rgba(0,0,0,0.04)",
              borderTop: `4px solid ${YELLOW}`,
              textAlign: "right",
            }}>
              <p style={{
                fontSize: isMobile ? 16 : 17, lineHeight: 1.9,
                color: "rgba(12,12,12,0.72)", margin: 0,
                fontStyle: "italic",
              }}>
                נשים שאהבו את המדינה ואת האנשים יותר מכל, האמינו בתרומה, נהגו תמיד בדרכי נועם ופעלו מתוך רצון לעשות טוב בכל הזדמנות. הערכים שלהן הם אבני היסוד שלנו — הן בחיים והן בעשייה החינוכית שאנחנו שואפות להוביל.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. STATIONS GALLERY
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: WHITE, padding: isMobile ? "72px 0" : "100px 0" }}>
        <div style={W}>
          <div style={{ marginBottom: isMobile ? 36 : 56 }}>
            <h2 className="section-h2" style={{
              fontSize: isMobile ? 34 : 44, fontWeight: 800, color: BLACK,
              margin: "0 0 12px", letterSpacing: "-0.022em", lineHeight: 1.1,
            }}>התחנות שלנו</h2>
            <p style={{ fontSize: 17, color: MUTED, margin: "0 0 10px", lineHeight: 1.6, maxWidth: 560 }}>
              כל תחנה נבנתה בקפידה — כדי להפוך כל פעילות לחוויה אמיתית ומשמעותית.
            </p>
            <p style={{ fontSize: 16, fontWeight: 800, color: BLACK, margin: 0 }}>
              ועוד מגוון רחב של פעילויות
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 24,
          }}>
            {[
              {
                title: "חץ וקשת",
                desc: "פעילות המפתחת ריכוז, דיוק ושליטה עצמית.",
                img: "https://images.unsplash.com/photo-1776243321350-9a1678266e06?w=600&h=420&fit=crop&auto=format&q=80",
                accent: CORAL,
              },
              {
                title: "מולקולות",
                desc: "פיתוח יכולת שיתוף פעולה, התמודדות עם לחץ ומשתנים.",
                img: "https://images.unsplash.com/photo-1533222535026-754c501569dd?w=600&h=420&fit=crop&auto=format&q=80",
                accent: BLUE,
              },
              {
                title: "אתגר שיווי המשקל",
                desc: "הקבוצה נדרשת לשמור על שיווי משקל יחד בשיתוף פעולה תוך פתרון חידות על מדינת ישראל ותולדותיה.",
                img: "https://images.unsplash.com/photo-1770563182638-6294f5851a41?w=600&h=420&fit=crop&auto=format&q=80",
                accent: GREEN,
              },
              {
                title: "צינורות צבעוניים",
                desc: "תיאום, תקשורת ושיתוף פעולה ותכנון משותף להשגת המטרה הקבוצתית.",
                img: "https://images.unsplash.com/photo-1685549265490-29908af7486a?w=600&h=420&fit=crop&auto=format&q=80",
                accent: YELLOW,
              },
              {
                title: "שמש אנושית",
                desc: "הקבוצה מתרגלת עבודת צוות באמצעות השמש על מנת לבנות מגדל שיגיע לשמיים.",
                img: "https://images.unsplash.com/photo-1758599668796-cdd37f4ecb66?w=600&h=420&fit=crop&auto=format&q=80",
                accent: BLUE,
              },
              {
                title: "כחול לבן",
                desc: "פעילות המפתחת זריזות, ריכוז, קשב ותגובה מהירה תוך אווירה מהנה וספורטיבית.",
                img: "https://images.unsplash.com/photo-1758272959288-85a7bf04967c?w=600&h=420&fit=crop&auto=format&q=80",
                accent: CORAL,
              },
            ].map(station => (
              <div key={station.title} style={{
                backgroundColor: WHITE, borderRadius: 20, overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.045)",
              }}>
                <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                  <img
                    src={station.img}
                    alt={station.title}
                    className="activity-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 4,
                    backgroundColor: station.accent,
                  }} />
                </div>
                <div style={{ padding: "18px 22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%",
                      backgroundColor: station.accent, flexShrink: 0,
                    }} />
                    <h3 style={{
                      fontSize: 18, fontWeight: 800, color: BLACK,
                      margin: 0, letterSpacing: "-0.015em",
                    }}>{station.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: MUTED, margin: 0, lineHeight: 1.7 }}>
                    {station.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
