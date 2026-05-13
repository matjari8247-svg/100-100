import React, { useState, useEffect, useRef } from "react";
const starSVG = `<svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg>`;

const reviews = [
  {
    name: "F. Ana",
    text: "…You're welcome, the service is good, I'm the one who thanks you.",
    stars: 5,
  },
  {
    name: "E. Marios",
    text: "Look ! Your customer service rocks. I want to proceed...",
    stars: 5,
  },
  {
    name: "Z. Lukas",
    text: "I will let my partner to check tv tomorrow and I will let you know..",
    stars: 4.5,
  },
  {
    name: "G. Nuno",
    text: "Sport TV is working. I'll test other channels and get back to you...",
    stars: 5,
  },
];

function StarRow({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "3px", justifyContent: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(count);
        const partial = !filled && i === Math.ceil(count) && count % 1 !== 0;
        const opacity = filled ? 1 : partial ? 0.55 : 0.25;
        return (
          <span
            key={i}
            style={{
              width: size,
              height: size,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fill: "#F5A623",
              color: "#F5A623",
              opacity,
              flexShrink: 0,
            }}
            dangerouslySetInnerHTML={{ __html: starSVG }}
          />
        );
      })}
    </div>
  );
}

export default function CustomerReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundImage:
          "radial-gradient(ellipse at 60% 50%, #0d3a6e 0%, #071a3e 40%, #050d1f 100%)",
        backgroundRepeat: "repeat",
        paddingTop: "60px",
        paddingBottom: "60px",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');`}</style>

      <div className="page-container">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div
            style={{
              backgroundPosition: "0% 0%",
              backgroundRepeat: "repeat",
              color: "rgb(210, 215, 220)",
              fontFamily: "Manrope, sans-serif",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              maxWidth: "100%",
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
                marginBottom: "16px",
              }}
            >
              Customer Reviews
            </h2>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <StarRow count={5} size={20} />
            </div>

            <p
              style={{
                color: "rgb(210, 215, 220)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26.4px",
                border: "0px none rgb(210, 215, 220)",
                textAlign: "center",
                margin: "0 0 36px 0",
              }}
            >
              4.8/5 based on 237 reviews
            </p>
          </div>

          <div
            style={{
              backgroundPosition: "0% 0%",
              backgroundRepeat: "repeat",
              color: "rgb(210, 215, 220)",
              fontFamily: "Manrope, sans-serif",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              maxWidth: "100%",
              marginBottom: "100px",
              margin: "0px 0px 100px",
            }}
          >
            <div
              className="flex flex-col md:flex-row justify-center"
              style={{ gap: "20px", flexWrap: "wrap" }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="hover:shadow-xl transition-shadow duration-300"
                  style={{
                    background: "rgba(13, 30, 26, 0.92)",
                    borderRadius: "12px",
                    border: "1px solid #161d15",
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "220px",
                    maxWidth: "295px",
                    flex: "1 1 220px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                  }}
                  {...({ style: {
                    background: "rgba(13, 30, 26, 0.92)",
                    borderRadius: "12px",
                    border: "1px solid #161d15",
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "220px",
                    maxWidth: "295px",
                    flex: "1 1 220px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                  } } as React.HTMLAttributes<HTMLDivElement>)}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <StarRow count={review.stars} size={16} />
                  </div>

                  <h3
                    style={{
                      color: "rgb(255, 255, 255)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "18px",
                      fontWeight: "800",
                      lineHeight: "27px",
                      border: "0px none rgb(255, 255, 255)",
                      textAlign: "center",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {review.name}
                  </h3>

                  <p
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "26.4px",
                      border: "0px none rgb(210, 215, 220)",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}