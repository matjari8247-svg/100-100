import { useState, useEffect, useRef } from "react";
export default function LiveFootballSports() {
  const ref = useRef<HTMLDivElement>(null);
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
        background: "linear-gradient(135deg, #0d2a5e 0%, #0a1a3a 40%, #071228 70%, #0a1a3a 100%)",
        width: "100%",
        margin: "50px 0px 100px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');`}</style>
      <div className="page-container">
        <div
          ref={ref}
          style={{
            backgroundPosition: "0% 0%",
            backgroundRepeat: "repeat",
            color: "rgb(210, 215, 220)",
            fontFamily: "Manrope, sans-serif",
            paddingLeft: "10px",
            paddingRight: "10px",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            maxWidth: "100%",
            paddingTop: "80px",
            paddingBottom: "80px",
            gap: "50px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div
            className="flex-1"
            style={{
              minWidth: "280px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              src="https://greek-iptv.store/wp-content/uploads/2025/12/TAZ2.webp"
              alt="greek iptv"
              className="w-full h-auto"
              style={{ maxWidth: "625px", objectFit: "contain" }}
            />
          </div>

          <div
            className="flex-1"
            style={{
              minWidth: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "30px",
            }}
          >
            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "35px",
                fontWeight: "800",
                lineHeight: "35px",
                border: "0px none rgb(255, 255, 255)",
                textAlign: "center",
                margin: 0,
              }}
            >
              Live Football & Sports with Greek IPTV
            </h2>

            <img
              src="https://greek-iptv.store/wp-content/uploads/2025/12/image-removebg-preview-3.png"
              alt="movies and series with greek iptv subscription"
              className="h-auto"
              style={{ maxWidth: "391px", width: "100%", objectFit: "contain" }}
            />

            <p
              style={{
                color: "rgb(210, 215, 220)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26.4px",
                border: "0px none rgb(210, 215, 220)",
                textAlign: "center",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              Therefore, get access to the best football channels and follow the main leagues and competitions, live and in high quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}