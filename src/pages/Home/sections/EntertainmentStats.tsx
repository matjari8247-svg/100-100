import { useState, useEffect, useRef } from "react";
export default function EntertainmentStats() {
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
        backgroundImage: "linear-gradient(to right, #1565C0 0%, #0D4FA0 20%, #0a1628 60%, #070d1a 100%)",
        width: "100%",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap');`}</style>
      <div className="page-container">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            gap: "60px 50px",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="flex-shrink-0" style={{ minWidth: "220px", maxWidth: "280px" }}>
            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "35px",
                fontWeight: "800",
                lineHeight: "52.5px",
                border: "0px none rgb(255, 255, 255)",
                margin: 0,
              }}
            >
              All your entertainment, in one place.
            </h2>
          </div>

          <div className="flex flex-row flex-wrap items-start" style={{ gap: "60px 80px", flex: 1 }}>
            <div className="flex flex-col items-center" style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "50px",
                  fontWeight: "800",
                  color: "#0D5EAF",
                  lineHeight: 1.1,
                }}
              >
                +40,000
              </span>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#d2d7dc",
                  marginTop: "6px",
                }}
              >
                Channels
              </span>
            </div>

            <div className="flex flex-col items-center" style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "50px",
                  fontWeight: "800",
                  color: "#0D5EAF",
                  lineHeight: 1.1,
                }}
              >
                +70,000
              </span>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#d2d7dc",
                  marginTop: "6px",
                }}
              >
                Movies
              </span>
            </div>

            <div className="flex flex-col items-center" style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "50px",
                  fontWeight: "800",
                  color: "#0D5EAF",
                  lineHeight: 1.1,
                }}
              >
                +55,000
              </span>
              <span
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#d2d7dc",
                  marginTop: "6px",
                }}
              >
                Series
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "#1e2b1a",
            width: "100%",
            marginBottom: "24px",
          }}
        />
      </div>
    </section>
  );
}