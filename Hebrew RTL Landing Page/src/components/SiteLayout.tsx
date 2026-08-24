import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import {
  BLACK, WHITE, BORDER, DARK, MUTED, PAGE_BG,
  useViewport, ColorLogo, GLOBAL_CSS,
} from "../shared";

const NAV_ITEMS = [
  { label: "הפעילויות", href: "/activities" },
  { label: "עלינו",    href: "/about"       },
  { label: "צרו קשר", href: "/contact"      },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const vw = useViewport();
  const isMobile = vw < 768;
  const location = useLocation();
  const W = { maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 200,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : WHITE,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${scrolled ? BORDER : "rgba(0,0,0,0.06)"}`,
        transition: "background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
      }}>
        <div style={{ ...W, height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <ColorLogo size={34} />
            <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: BLACK }}>
              מחוץ למסכים
            </div>
          </Link>

          {!isMobile && (
            <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
              {NAV_ITEMS.map(item => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link${location.pathname === item.href ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {isMobile && (
              <button
                aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(v => !v)}
                style={{
                  width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                  background: "none", border: "none", cursor: "pointer", borderRadius: 8, padding: 0,
                }}
              >
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                  <rect x="0" y="0" width="22" height="2" rx="1" fill={BLACK}
                    style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none", transformOrigin: "center", transition: "transform 280ms ease" }}/>
                  <rect x="0" y="7" width="22" height="2" rx="1" fill={BLACK}
                    style={{ opacity: menuOpen ? 0 : 1, transition: "opacity 180ms ease" }}/>
                  <rect x="0" y="14" width="22" height="2" rx="1" fill={BLACK}
                    style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none", transformOrigin: "center", transition: "transform 280ms ease" }}/>
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-nav-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav className={`mobile-nav-drawer${menuOpen ? " open" : ""}`} aria-label="ניווט ראשי">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ColorLogo size={28} />
            <span style={{ fontSize: 14, fontWeight: 800, color: BLACK, letterSpacing: "-0.01em" }}>מחוץ למסכים</span>
          </div>
          <button
            aria-label="סגור תפריט"
            onClick={() => setMenuOpen(false)}
            style={{
              width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
              background: PAGE_BG, border: "none", cursor: "pointer", borderRadius: 8, padding: 0,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <line x1="1" y1="1" x2="12" y2="12" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="12" y1="1" x2="1" y2="12" stroke={BLACK} strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div style={{ flex: 1 }}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.label}
              to={item.href}
              className={`mobile-nav-link${location.pathname === item.href ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link
            to="/contact"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              height: 52, borderRadius: 10,
              background: BLACK, color: WHITE,
              fontSize: 16, fontWeight: 700, textDecoration: "none",
              fontFamily: "'Assistant', sans-serif", letterSpacing: "-0.01em",
            }}
            onClick={() => setMenuOpen(false)}
          >
            צרו קשר
          </Link>
          <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 4 }}>
            <a href="tel:0502276676" style={{ fontSize: 14, color: MUTED, textDecoration: "none", direction: "ltr", display: "block", textAlign: "center" }}>050-2276676</a>
            <a href="tel:0542301160" style={{ fontSize: 14, color: MUTED, textDecoration: "none", direction: "ltr", display: "block", textAlign: "center" }}>054-2301160</a>
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  const vw = useViewport();
  const isMobile = vw < 768;

  return (
    <footer style={{ backgroundColor: DARK, padding: isMobile ? "52px 24px 36px" : "64px 48px 44px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 0.8fr 1.4fr",
          gap: 52, marginBottom: 52,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <ColorLogo size={30} />
              <span style={{ fontSize: 15, fontWeight: 800, color: WHITE, letterSpacing: "-0.01em" }}>מחוץ למסכים</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.36)", maxWidth: 240, margin: "0 0 28px" }}>
              פעילויות ODT שמחברות בין תלמידים דרך משחק, תנועה, שיתוף פעולה ואתגר.
            </p>
            <a href="https://instagram.com/outofthescreen_" target="_blank" rel="noreferrer"
              className="footer-link"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              <span style={{ direction: "ltr" }}>@outofthescreen_</span>
            </a>
          </div>

          <div>
            <h4 style={{ color: WHITE, fontSize: 11, fontWeight: 700, margin: "0 0 20px", letterSpacing: "0.09em", textTransform: "uppercase", opacity: 0.38 }}>ניווט</h4>
            {NAV_ITEMS.map(item => (
              <Link key={item.label} to={item.href} className="footer-link"
                style={{ display: "block", fontSize: 14, marginBottom: 12 }}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: WHITE, fontSize: 11, fontWeight: 700, margin: "0 0 20px", letterSpacing: "0.09em", textTransform: "uppercase", opacity: 0.38 }}>יצירת קשר</h4>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>טלפון</div>
              <a href="tel:0502276676" className="footer-link" style={{ display: "block", fontSize: 14, direction: "ltr", textAlign: "right", marginBottom: 4 }}>050-2276676</a>
              <a href="tel:0542301160" className="footer-link" style={{ display: "block", fontSize: 14, direction: "ltr", textAlign: "right" }}>054-2301160</a>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>אימייל</div>
              <a href="mailto:out.of.the.screen1@gmail.com" className="footer-link"
                style={{ display: "block", fontSize: 13, direction: "ltr", textAlign: "right", wordBreak: "break-all" }}>
                out.of.the.screen1@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          color: "rgba(255,255,255,0.18)", fontSize: 12, flexWrap: "wrap", gap: 8,
        }}>
          <span>© 2024 מחוץ למסכים. כל הזכויות שמורות.</span>
          <span style={{ direction: "ltr" }}>Made with ♥ in Israel</span>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div dir="rtl" style={{
        fontFamily: "'Assistant', system-ui, sans-serif",
        color: BLACK,
        backgroundColor: PAGE_BG,
        overflowX: "clip",
      }}>
        <Header />
        <main><Outlet /></main>
        <Footer />
      </div>
    </>
  );
}
