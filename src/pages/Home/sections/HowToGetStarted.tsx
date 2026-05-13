import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

export default function HowToGetStarted() {
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

  const whatsappIcon = (
    <span dangerouslySetInnerHTML={{ __html: `<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>` }} />
  );

  const monitorIcon = (
    <span dangerouslySetInnerHTML={{ __html: `<svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white"><path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path></svg>` }} />
  );

  const arrowIcon = (
    <span dangerouslySetInnerHTML={{ __html: `<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>` }} />
  );

  const cards = [
    {
      number: "1",
      heading: "Contact Us on WhatsApp",
      paragraph: "Contact us directly on WhatsApp. We answer your questions and help you get started quickly.",
      buttonLabel: "Contact on WhatsApp",
      buttonIcon: whatsappIcon,
      href: "#",
    },
    {
      number: "2",
      heading: "Choose the Countries and Channels You Want",
      paragraph: "Choose the countries and TV channels you want. Customize your channel list based on your preferences.",
      buttonLabel: "Choose Channels",
      buttonIcon: monitorIcon,
      href: "#",
    },
    {
      number: "3",
      heading: "Test the Service Before Subscribing",
      paragraph: "Test the service calmly before choosing a subscription. Check quality, channels, and compatibility at your own pace.",
      buttonLabel: "Free trial",
      buttonIcon: arrowIcon,
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundImage: "radial-gradient(ellipse at 50% 40%, #0d2a4a 0%, #081828 40%, #0a1e38 60%, #0d3060 80%, #1a4a8a 100%)",
        width: "100%",
        paddingTop: "120px",
        paddingBottom: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');
        .step-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-family: Manrope, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 23.1px;
          background-color: rgb(13, 94, 175);
          border-radius: 8px;
          border: none;
          padding: 10px 20px;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s, opacity 0.3s, transform 0.2s;
        }
        .step-btn:hover {
          background-color: #0a4d91;
          opacity: 0.92;
          transform: scale(1.03);
        }
        .step-card {
          transition: box-shadow 0.3s;
        }
        .step-card:hover {
          box-shadow: 0 8px 40px rgba(13, 94, 175, 0.25);
        }
      `}</style>

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
              margin: "0px 0px 0px",
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
                marginBottom: "20px",
              }}
            >
              Start Watching Greek IPTV in Minutes
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
                maxWidth: "760px",
                margin: "0 auto",
              }}
            >
              Getting access to Greek television is simple. Our straightforward process means you'll be watching your favorite channels in no time.
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
              margin: "60px 0px 40px",
            }}
          >
            <div
              className="flex flex-col md:flex-row"
              style={{
                gap: "50px",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="step-card"
                  style={{
                    flex: "1 1 0",
                    minWidth: 0,
                    backgroundColor: "#0a1a1e",
                    borderRadius: "12px",
                    padding: "50px 32px 40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    textAlign: "center",
                    transition: "box-shadow 0.3s",
                  }}
                  style-delay={String(i * 150)}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "-30px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#000000",
                        lineHeight: "1",
                      }}
                    >
                      {card.number}
                    </span>
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
                      marginTop: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    {card.heading}
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
                      marginBottom: "28px",
                      flexGrow: 1,
                    }}
                  >
                    {card.paragraph}
                  </p>

                  <a
                    href={card.href}
                    className="step-btn"
                  >
                    {card.buttonLabel}
                    {card.buttonIcon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}