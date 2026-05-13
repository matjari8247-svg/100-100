import { useState, useEffect, useRef } from "react";
export default function HeroSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800;900&display=swap');`}</style>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://greek-iptv.store/wp-content/uploads/2025/12/nova-sports-prime-gr.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0D5EAF",
          opacity: 0.84,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "200px",
          paddingBottom: "200px",
        }}
      >
        <div className="page-container">
          <div
            ref={ref}
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              maxWidth: "100%",
              color: "rgb(210, 215, 220)",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            <a
              href="#"
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "12px",
                backgroundColor: "rgb(170, 144, 6)",
                borderRadius: "25px",
                border: "0px none rgb(255, 255, 255)",
                padding: "5px 10px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                cursor: "pointer",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Trusted by viewers worldwide
            </a>

            <h1
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: "800",
                lineHeight: "1.3",
                border: "0px none rgb(255, 255, 255)",
                margin: 0,
              }}
            >
              Stream Greek IPTV<br />Channels Anywhere
            </h1>

            <div>
              <p
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "33px",
                  border: "0px none rgb(210, 215, 220)",
                  margin: 0,
                }}
              >
                Access <strong style={{ fontWeight: 700, color: "rgb(210, 215, 220)" }}>200+ Greek television channels</strong> including live sports, news, movies, and entertainment.
              </p>
              <p
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "33px",
                  border: "0px none rgb(210, 215, 220)",
                  margin: 0,
                }}
              >
                Watch on any device with our reliable Greek IPTV service.
              </p>
            </div>

            <p
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "clamp(20px, 2.5vw, 30px)",
                fontWeight: "900",
                lineHeight: "49.5px",
                border: "0px none rgb(255, 255, 255)",
                margin: 0,
              }}
            >
              Live Greek TV &amp; Football from only 4.17€/month
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26.4px",
                  backgroundColor: "rgb(13, 94, 175)",
                  borderRadius: "8px",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "15px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Plans &amp; Pricing
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<svg aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>`,
                  }}
                />
              </a>

              <a
                href="#"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "26.4px",
                  backgroundColor: "rgba(13, 94, 175, 0)",
                  borderRadius: "8px",
                  border: "1px solid rgb(255, 255, 255)",
                  padding: "15px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(13, 94, 175, 0)";
                }}
              >
                Start Free Trial
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>`,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}