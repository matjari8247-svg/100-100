export default function PricingPlans() {
  const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm6.226 9.499-7.637 7.636a1.09 1.09 0 0 1-1.542 0l-3.273-3.273a1.09 1.09 0 0 1 1.543-1.542l2.501 2.501 6.865-6.865a1.09 1.09 0 0 1 1.543 1.543Z"></path></svg>`;

  const features = [
    "Fast technical support",
    "HD/4K/8K channels included",
    "Anti-freeze V8.2",
    "Immediate activation",
    "Reactive support",
    "Satisfaction guaranteed",
  ];

  const plans = [
    { duration: "1 MONTH", price: "14,99€", popular: false },
    { duration: "3 MONTHS", price: "24,99€", popular: false },
    { duration: "6 MONTHS", price: "34,99€", popular: false },
    { duration: "12 MONTHS", price: "49,99€", popular: true },
  ];

  return (
    <section
      id="prix"
      style={{
        backgroundImage: "linear-gradient(to right, #0a3a6e 0%, #050f1f 50%, #0a2a5e 100%)",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        color: "rgb(210, 215, 220)",
        fontFamily: "Manrope, sans-serif",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        maxWidth: "100%",
        paddingTop: "100px",
        paddingBottom: "80px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');`}</style>

      <div className="page-container">
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "rgb(255, 255, 255)",
              fontFamily: "Manrope, sans-serif",
              fontSize: "35px",
              fontWeight: "800",
              lineHeight: "52.5px",
              border: "0px none rgb(255, 255, 255)",
              textAlign: "center",
              margin: "0 0 12px 0",
            }}
          >
            Choose the Best Greek IPTV Subscription
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
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Moreover, simple, flexible IPTV plans with no hidden fees. Choose the option that fits your needs and start streaming instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 justify-items-center" style={{ gap: "50px" }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col w-full"
              style={{
                backgroundColor: "#0e1a14",
                borderRadius: "12px",
                padding: "30px",
                border: plan.popular ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.06)",
                boxSizing: "border-box",
                minWidth: 0,
              }}
            >
              <div className="flex flex-col items-center" style={{ marginBottom: "4px" }}>
                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "22px",
                    fontWeight: "700",
                    lineHeight: "36.3px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                    margin: "0",
                  }}
                >
                  {plan.duration}
                </p>
                {plan.popular && (
                  <span
                    style={{
                      backgroundColor: "#0D5EAF",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: "700",
                      fontFamily: "Manrope, sans-serif",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      display: "inline-block",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    POPULAR
                  </span>
                )}
                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "22px",
                    fontWeight: "700",
                    lineHeight: "36.3px",
                    border: "0px none rgb(255, 255, 255)",
                    textAlign: "center",
                    margin: "0",
                  }}
                >
                  VIP
                </p>
              </div>

              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  margin: "14px 0",
                }}
              />

              <div className="text-center" style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    color: "#ffffff",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "48px",
                    fontWeight: "800",
                    lineHeight: "1.1",
                  }}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="flex flex-col" style={{ margin: "0", padding: "0", listStyle: "none", flexGrow: 1 }}>
                {features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-start"
                    style={{
                      color: "rgb(210, 215, 220)",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "26.4px",
                      border: "0px none rgb(210, 215, 220)",
                      padding: "0px 0px 7.5px",
                      gap: "10px",
                    }}
                  >
                    <span
                      className="flex-shrink-0"
                      style={{ width: "20px", height: "20px", marginTop: "3px", fill: "#0D5EAF", display: "inline-flex" }}
                      dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#0D5EAF"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm6.226 9.499-7.637 7.636a1.09 1.09 0 0 1-1.542 0l-3.273-3.273a1.09 1.09 0 0 1 1.543-1.542l2.501 2.501 6.865-6.865a1.09 1.09 0 0 1 1.543 1.543Z"></path></svg>` }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
 href="#"
 className="block text-center hover:opacity-90 transition-opacity duration-200 cursor-pointer"
 style={{ color: "rgb(255, 255, 255)", fontFamily: "Manrope, sans-serif", fontSize: "16px", fontWeight: "600", lineHeight: "26.4px", backgroundColor: "rgb(13, 94, 175)", borderRadius: "8px", border: "0px none rgb(255, 255, 255)", padding: "15px 30px", textAlign: "center", marginTop: "24px", textDecoration: "none" }}>
                Order Now
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center" style={{ marginTop: "32px", gap: "10px" }}>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(210,215,220)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span
              style={{
                color: "rgb(210, 215, 220)",
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Guaranteed{" "}
              <strong style={{ fontWeight: "700", color: "rgb(210, 215, 220)" }}>safe &amp; secure</strong>{" "}
              checkout
            </span>
          </div>
          <div>
            <img
              src="https://greek-iptv.store/wp-content/uploads/2025/12/Capture_d_ecran_2025-08-12_103736-removebg-preview.png"
              alt="VISA"
              className="h-auto"
              style={{ maxWidth: "320px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}