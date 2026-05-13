import { useState, useEffect, useRef } from "react";
import { Box, Users } from "lucide-react";

const faqCards = [
  {
    heading: "What is Greek IPTV?",
    body: "Greek IPTV is a modern streaming service that lets you watch Greek and international TV channels, live sports, football, movies and series online, without the need for satellite dishes or cable connections.",
    centerHeading: false,
  },
  {
    heading: "Is it legal?",
    body: "IPTV is a legal technology used to stream television content over the internet. However, legality depends on the content accessed and local regulations. Users are responsible for using the service in accordance with applicable laws.",
    centerHeading: true,
  },
  {
    heading: "On which devices does it work?",
    body: "Greek IPTV works on a wide range of devices, including Smart TVs (Samsung & LG), Android TV, Android Box, Amazon Fire Stick, smartphones (Android & iOS), tablets, as well as Windows and Mac computers.",
    centerHeading: false,
  },
  {
    heading: "Does it include live football and sports?",
    body: "Greek IPTV works on a wide range of devices, including Smart TVs (Samsung & LG), Android TV, Android Box, Amazon Fire Stick, smartphones (Android & iOS), tablets, as well as Windows and Mac computers.",
    centerHeading: false,
  },
  {
    heading: "Is it stable for live matches?",
    body: "Absolutely. Our servers are optimized for live events, offering smooth streaming, minimal buffering and low latency, even during high-demand sports broadcasts.",
    centerHeading: false,
  },
  {
    heading: "What streaming quality does it offer?",
    body: "Greek IPTV supports multiple resolutions, including SD, HD, Full HD, 4K and even 8K, depending on the channel and your internet connection speed.",
    centerHeading: false,
  },
  {
    heading: "Can I watch Greek IPTV outside Greece?",
    body: "Greek IPTV supports multiple resolutions, including SD, HD, Full HD, 4K and even 8K, depending on the channel and your internet connection speed.",
    centerHeading: false,
  },
  {
    heading: "How fast is the activation?",
    body: "Activation is quick and simple. Once your order is confirmed, access details are sent promptly so you can start watching almost immediately.",
    centerHeading: false,
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundImage:
          "radial-gradient(ellipse at 50% 30%, #0a2a6e 0%, #041030 60%, #020d2e 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        width: "100%",
        position: "relative",
        color: "rgb(210, 215, 220)",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');`}</style>

      <div className="page-container">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2
            className="text-center w-full"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "35px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.3,
              letterSpacing: "0em",
              marginBottom: "48px",
              marginTop: 0,
            }}
          >
            Frequently Asked Questions about Greek IPTV
          </h2>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
            style={{
              gap: "24px",
            }}
          >
            {faqCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col hover:shadow-2xl transition-shadow duration-300"
                style={{
                  backgroundColor: "rgba(12, 26, 56, 0.92)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  padding: "28px",
                  alignItems: "flex-start",
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                <div
                  className="w-full flex justify-center"
                  style={{ marginBottom: "20px" }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#1a5fb4",
                      flexShrink: 0,
                      boxShadow: "0 0 12px rgba(26, 95, 180, 0.5)",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "20px", height: "20px", fill: "#ffffff" }}
                    >
                      <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
                    </svg>
                  </div>
                </div>

                <h3
                  className="w-full"
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "18px",
                    fontWeight: 800,
                    lineHeight: "27px",
                    border: "0px none rgb(255, 255, 255)",
                    marginBottom: "12px",
                    marginTop: 0,
                    textAlign: card.centerHeading ? "center" : "left",
                  }}
                >
                  {card.heading}
                </h3>

                <p
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Scroll to top"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#0D5EAF",
          border: "none",
          right: "20px",
          bottom: "40px",
          zIndex: 50,
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "16px", height: "16px" }}
        >
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}