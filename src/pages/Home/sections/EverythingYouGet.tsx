import { useState, useEffect, useRef } from "react";
export default function EverythingYouGet() {
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
        background: "linear-gradient(135deg, #0D3A6E 0%, #0a1a3a 40%, #060d1f 100%)",
        fontFamily: "Manrope, sans-serif",
        color: "rgb(210, 215, 220)",
        position: "relative",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');`}</style>
      <div
        className="page-container"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div
          ref={ref}
          className={`flex flex-col md:flex-row gap-12 md:gap-[50px] items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          
          <div className="flex flex-col flex-1 min-w-0" style={{ gap: "0px" }}>
            
            <h2
              style={{
                color: "rgb(255, 255, 255)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "35px",
                fontWeight: "800",
                lineHeight: "52.5px",
                border: "0px none rgb(255, 255, 255)",
                margin: "0 0 20px 0",
              }}
            >
              Everything You Get with Greek IPTV
            </h2>

            
            <p
              style={{
                color: "rgb(210, 215, 220)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26.4px",
                border: "0px none rgb(210, 215, 220)",
                margin: "0 0 40px 0",
              }}
            >
              In addition, we give you instant access to live TV, sports, movies and series with a fast, stable and user-friendly IPTV service.
            </p>

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "rgba(11, 26, 20, 0.92)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "24px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#0D5EAF",
                    marginBottom: "16px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM112 223.4c3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.7 8.6-10.8 11.9-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.3 7.4-15.8 4-15.1-4.5zm250.8 122.8C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.3 24.6 20.5zm6.2-118.3l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.1 7.3-15.6 4-14.9-4.5 3.3-42.1 32.2-71.4 56-71.4s52.7 29.3 56 71.4c.6 8.6-11 11.9-15.1 4.5z"></path></svg>`,
                    }}
                  />
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
                    margin: 0,
                  }}
                >
                  97 % Satisfied customers
                </h3>
              </div>

              
              <div
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "rgba(11, 26, 20, 0.92)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "24px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#0D5EAF",
                    marginBottom: "16px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>`,
                    }}
                  />
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
                    margin: 0,
                  }}
                >
                  12 years experience in servers
                </h3>
              </div>

              
              <div
                className="flex flex-col items-center"
                style={{
                  backgroundColor: "rgba(11, 26, 20, 0.92)",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "24px 16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#0D5EAF",
                    marginBottom: "16px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"><path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path></svg>`,
                    }}
                  />
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
                    margin: 0,
                  }}
                >
                  Server classified as n&#xBA; 1
                </h3>
              </div>
            </div>
          </div>

          
          <div
            className="w-full md:w-auto flex-shrink-0"
            style={{
              width: "100%",
              maxWidth: "441px",
              backgroundColor: "#0d0f0e",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
            }}
          >
            
            <img
 src="https://greek-iptv.store/wp-content/uploads/2025/12/freepik__the-style-is-candid-image-photography-with-natural__51441-1-1024x585.jpeg"
 alt="movies and series with greek iptv subscription"
 className="w-full h-auto block"/>

            
            <div
              className="flex flex-col items-center"
              style={{ padding: "30px" }}
            >
              <h2
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "22px",
                  fontWeight: "800",
                  lineHeight: "33px",
                  border: "0px none rgb(255, 255, 255)",
                  textAlign: "center",
                  margin: "0 0 16px 0",
                }}
              >
                Test for Free
              </h2>

              <p
                style={{
                  color: "rgb(210, 215, 220)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "24.75px",
                  border: "0px none rgb(210, 215, 220)",
                  textAlign: "center",
                  margin: "0 0 24px 0",
                }}
              >
                For example, try our IPTV service without commitment and discover premium channels, live sports and VOD in HD, 4K and 8K quality.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "23.1px",
                  backgroundColor: "rgb(13, 94, 175)",
                  borderRadius: "8px",
                  border: "0px none rgb(255, 255, 255)",
                  padding: "10px 20px",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Free trial
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>`,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <a
        href="#"
        className="hidden md:flex items-center justify-center fixed bottom-8 right-8 cursor-pointer hover:opacity-90 transition-opacity duration-200 z-50"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#0D5EAF",
          boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        }}
        aria-label="Scroll to top"
      >
        <span
          dangerouslySetInnerHTML={{
            __html: `<svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"><path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path></svg>`,
          }}
        />
      </a>
    </section>
  );
}