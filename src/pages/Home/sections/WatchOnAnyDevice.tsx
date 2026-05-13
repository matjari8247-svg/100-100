import { useState, useEffect, useRef } from "react";
export default function WatchOnAnyDevice() {
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
        backgroundImage:
          "radial-gradient(ellipse at left center, #0d4a8f 0%, #0a1628 40%, #0a1628 60%, #0d4a8f 100%)",
        width: "100%",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&display=swap');`}</style>
      <div
        ref={ref}
        className="page-container"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "55px", paddingBottom: "55px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
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
              marginBottom: "20px",
            }}
          >
            Watch on Any Device
          </h2>

          <p
            style={{
              color: "rgb(210, 215, 220)",
              fontFamily: "Manrope, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "26.4px",
              border: "0px none rgb(210, 215, 220)",
              textAlign: "center",
              marginBottom: "30px",
              maxWidth: "600px",
            }}
          >
            Our Greek IPTV service works seamlessly across all your devices.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#0D5EAF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path></svg>`,
                }}
              />
            </div>

            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#0D5EAF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>`,
                }}
              />
            </div>

            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "#0D5EAF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}