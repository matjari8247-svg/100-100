import { Home, Image } from "lucide-react";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(210, 215, 220)",
        fontFamily: "Manrope, sans-serif",
        paddingTop: "50px",
        backgroundColor: "#0a0e1a",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
        .footer-link:hover {
          color: #00ddff !important;
          transition: all 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
        .contact-btn:hover {
          opacity: 0.85;
          transition: all 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
      `}</style>

      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-0 pb-0" style={{ columnGap: "86px", rowGap: "37px", gridTemplateColumns: "repeat(1,1fr)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ columnGap: "86px", rowGap: "37px" }}>
            <div className="flex flex-col items-start">
              <img
                src="https://greek-iptv.store/wp-content/uploads/2026/01/ChatGPT-Image-19-janv.-2026-15_00_39-Copie.png"
                alt="greek iptv"
                className="h-auto"
                style={{ maxWidth: "140px", width: "auto" }}
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
                  marginTop: "16px",
                }}
              >
                The best Greek IPTV service with over 1000+ channels, movies, and series available on all your devices.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <p
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "23.1px",
                  border: "0px none rgb(210, 215, 220)",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Have questions? Reach out to our team.
              </p>
              <a
                href="#"
                className="contact-btn"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "23.1px",
                  backgroundColor: "rgb(13, 94, 175)",
                  borderRadius: "7px",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "10px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Contact us
              </a>
            </div>

            <div className="flex flex-col items-start justify-center">
              <ul className="list-none p-0 m-0 flex flex-col gap-1">
                <li
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                  }}
                >
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "18.2px",
                      border: "0px none rgb(210, 215, 220)",
                      padding: "0px 17.5px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                  }}
                >
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "18.2px",
                      border: "0px none rgb(210, 215, 220)",
                      padding: "0px 17.5px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                  }}
                >
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "18.2px",
                      border: "0px none rgb(210, 215, 220)",
                      padding: "0px 17.5px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    FAQ
                  </a>
                </li>
                <li
                  style={{
                    color: "rgb(210, 215, 220)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26.4px",
                    border: "0px none rgb(210, 215, 220)",
                  }}
                >
                  <a
                    href="#"
                    className="footer-link"
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "18.2px",
                      border: "0px none rgb(210, 215, 220)",
                      padding: "0px 17.5px",
                      textTransform: "capitalize",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-0" style={{ paddingBlock: "40px" }}>
          <div className="flex flex-col items-center justify-center gap-1">
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
              &copy; 2025 greek-iptv.store. All Rights Reserved.
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.4)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "18.2px",
                border: "0px none rgba(255, 255, 255, 0.4)",
                textAlign: "center",
                margin: 0,
              }}
            >
              This site is not affiliated with any official broadcaster.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center md:justify-between">
            <div className="flex flex-row flex-wrap items-center justify-center">
              <a
                href="#"
                className="footer-link"
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "18.2px",
                  border: "0px none rgb(210, 215, 220)",
                  padding: "0px 17.5px",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="footer-link"
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "18.2px",
                  border: "0px none rgb(210, 215, 220)",
                  padding: "0px 17.5px",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Refund Policy
              </a>
              <a
                href="#"
                className="footer-link"
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "18.2px",
                  border: "0px none rgb(210, 215, 220)",
                  padding: "0px 17.5px",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Terms &amp; Conditions
              </a>
              <a
                href="#"
                className="footer-link"
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "18.2px",
                  border: "0px none rgb(210, 215, 220)",
                  padding: "0px 17.5px",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Legal Disclaimer
              </a>
            </div>

            <div className="flex flex-row items-center gap-1 ml-2">
              <img
                src="https://greek-iptv.store/wp-content/plugins/gtranslate/flags/32/en.png"
                alt="en"
                style={{ width: "33px", height: "33px" }}
              />
              <span
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  marginLeft: "4px",
                }}
              >
                EN
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "2px" }}
              >
                <path d="M1 1L5 5L9 1" stroke="rgb(210,215,220)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}