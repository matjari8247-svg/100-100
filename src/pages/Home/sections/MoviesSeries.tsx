import { useState, useEffect, useRef } from "react";
import { Video } from "lucide-react";

export default function MoviesAndSeries() {
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
        backgroundImage:
          "radial-gradient(ellipse at 80% 50%, #0d4fa0 0%, #0a1628 50%, #0d1b2e 100%)",
        fontFamily: "Manrope, sans-serif",
        paddingTop: "120px",
        paddingBottom: "120px",
        width: "100%",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');
        .more-info-link { color: #0D5EAF; transition: color 0.3s; }
        .more-info-link:hover { color: #00ddff; }
        .more-info-link:hover svg { fill: #00ddff; }
        .more-info-link svg { fill: #0D5EAF; transition: fill 0.3s; }
        .divider-line { border: none; border-top: 1px solid #1e2b3a; width: 100%; margin: 0; }
      `}</style>
      <div className="page-container">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ gap: "50px" }}
        >
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div
              className="grid grid-cols-2"
              style={{ gap: "15px" }}
            >
              <div style={{ borderRadius: "14px", overflow: "hidden" }}>
                <img
 src="https://greek-iptv.store/wp-content/uploads/2025/12/netflixiptv-1_compressed.webp"
 alt="Netflix"
 className="w-full h-auto block"/>
              </div>
              <div style={{ borderRadius: "14px", overflow: "hidden" }}>
                <img
 src="https://greek-iptv.store/wp-content/uploads/2025/12/efc10d_82f6ea18c2494be98c46c59b9e55cf71_mv2.webp"
 alt="Disney+"
 className="w-full h-auto block"/>
              </div>
              <div style={{ borderRadius: "14px", overflow: "hidden" }}>
                <img
 src="https://greek-iptv.store/wp-content/uploads/2025/12/primevideoiptv-1_compressed.webp"
 alt="Prime Video"
 className="w-full h-auto block"/>
              </div>
              <div style={{ borderRadius: "14px", overflow: "hidden" }}>
                <img
 src="https://greek-iptv.store/wp-content/uploads/2025/12/appletviptv-1_compressed.webp"
 alt="Apple TV"
 className="w-full h-auto block"/>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col" style={{ color: "rgb(210, 215, 220)" }}>
            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "35px",
                fontWeight: "800",
                lineHeight: "52.5px",
                border: "0px none rgb(255, 255, 255)",
                margin: "0 0 16px 0",
              }}
            >
              Thousands of movies and series available anytime.
            </h2>

            <p
              style={{
                color: "rgb(210, 215, 220)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26.4px",
                border: "0px none rgb(210, 215, 220)",
                margin: "0 0 24px 0",
              }}
            >
              Moreover, with our server, you get access to a vast catalog of movies and series, available anytime, without downloads or complications.
            </p>

            <hr className="divider-line" style={{ marginBottom: "24px" }} />

            <hr className="divider-line" style={{ marginBottom: "24px" }} />

            <div className="flex flex-col md:flex-row" style={{ gap: "36px" }}>
              <div className="flex flex-col flex-1">
                <h3
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "800",
                    lineHeight: "24px",
                    border: "0px none rgb(255, 255, 255)",
                    margin: "0 0 8px 0",
                  }}
                >
                  Recent films and great classics
                </h3>
                <p
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                    margin: "0 0 10px 0",
                  }}
                >
                  A diverse catalog featuring recent releases, classic films, and content for the whole family.
                </p>
                <a
                  href="#"
                  className="more-info-link inline-flex items-center gap-1.5 no-underline"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "23.1px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    borderRadius: "3px",
                    border: "0px none rgb(13, 94, 175)",
                    textDecoration: "none",
                  }}
                >
                  More Information
                  <span style={{ display: "inline-flex", alignItems: "center", width: "14px", height: "14px" }}>
                    <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                  </span>
                </a>
              </div>

              <div className="flex flex-col flex-1">
                <h3
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "800",
                    lineHeight: "24px",
                    border: "0px none rgb(255, 255, 255)",
                    margin: "0 0 8px 0",
                  }}
                >
                  Popular series and new releases
                </h3>
                <p
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                    margin: "0 0 10px 0",
                  }}
                >
                  Access to the most popular series and the latest releases, in HD, 4K and 8K quality.
                </p>
                <a
                  href="#"
                  className="more-info-link inline-flex items-center gap-1.5 no-underline"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "23.1px",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    borderRadius: "3px",
                    border: "0px none rgb(13, 94, 175)",
                    textDecoration: "none",
                  }}
                >
                  More Information
                  <span style={{ display: "inline-flex", alignItems: "center", width: "14px", height: "14px" }}>
                    <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}