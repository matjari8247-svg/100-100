import { useState, useEffect, useRef } from "react";
export default function ChannelLogos() {
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

  const logos = [
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/nova-sports-prime-gr.png",
      alt: "greek channel",
    },
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/ant1-gr.png",
      alt: "ANT1",
    },
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/cosmote-sport-1-gr.png",
      alt: "greek channel",
    },
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/skai-tv-gr.png",
      alt: "greek channel",
    },
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/syros-tv-gr.png",
      alt: "greek channel",
    },
    {
      src: "https://greek-iptv.store/wp-content/uploads/2025/12/ert1-gr.png",
      alt: "ERT1",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to right, #061226 0%, #0a2154 20%, #0d3d8a 45%, #0d4fa8 55%, #0a2154 80%, #061226 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "Manrope, sans-serif",
        marginBottom: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(255,255,255,0.025) 18px, rgba(255,255,255,0.025) 19px)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        className="page-container"
        style={{ paddingTop: "46px", paddingBottom: "46px" }}
      >
        <div
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto object-contain"
                style={{
                  maxWidth: "190px",
                  maxHeight: "90px",
                  width: "auto",
                  filter: "brightness(1) drop-shadow(0 0 8px rgba(13,94,175,0.3))",
                  transition: "filter 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "brightness(1.2) drop-shadow(0 0 14px rgba(13,94,175,0.6))";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    "brightness(1) drop-shadow(0 0 8px rgba(13,94,175,0.3))";
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}