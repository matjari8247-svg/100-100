import { Link } from 'react-router-dom';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuProvider, useMenu } from "@/integrations/wordpress/WordPressMenuProvider";

function NavMenuContent() {
  const { menuItems, loading } = useMenu();
  const [blogOpen, setBlogOpen] = useState(false);

  if (loading) return <div className="hidden lg:flex w-full h-10 animate-pulse bg-white/5 rounded-md" />;

  return (
    <>
      <nav
        className="hidden lg:flex items-center"
        style={{
          backgroundPosition: "0% 0%",
          backgroundRepeat: "repeat",
          color: "rgb(210, 215, 220)",
          fontFamily: "Manrope, sans-serif",
          alignItems: "center",
          margin: "0px 0px 0px 50px",
          gap: "0px",
          flex: 1
        }}
      >
        {menuItems.map((item, index) => (
          <Link
            key={item.id || index}
            to={item.href || "#"}
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: index === 0 ? "#ffffff" : "#d2d7dc",
              backgroundColor: index === 0 ? "#2a2a2a" : "transparent",
              borderRadius: "5px",
              padding: "10px 12px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              lineHeight: "1.65",
              letterSpacing: "0em",
              transition: "color 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
              minWidth: index === 0 ? "65px" : "auto",
              justifyContent: "center",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00ddff")}
            onMouseLeave={e => (e.currentTarget.style.color = index === 0 ? "#ffffff" : "#d2d7dc")}
          >
            {item.label.toUpperCase()}
          </Link>
        ))}
      </nav>

      <div className="flex lg:hidden items-center ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden"
              aria-label="Open menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#d2d7dc" }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#d2d7dc" }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#d2d7dc" }} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" style={{ backgroundColor: "rgba(13, 27, 46, 0.98)", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
            <SheetHeader>
              <SheetTitle style={{ color: "#ffffff", fontFamily: "Manrope, sans-serif" }}>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-6">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href || "#"}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#d2d7dc",
                    padding: "12px 16px",
                    textDecoration: "none",
                    borderRadius: "5px",
                    transition: "color 0.12s",
                    display: "block",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00ddff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#d2d7dc")}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
              <div className="mt-4">
                <Button
                  style={{
                    backgroundColor: "#0D5EAF",
                    color: "#ffffff",
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "7px",
                    padding: "10px 20px",
                    border: "none",
                    boxShadow: "none",
                    width: "100%",
                  }}
                >
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <header
      id="header"
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(13, 27, 46, 0.92)",
        fontFamily: "Manrope, sans-serif",
        minHeight: "90px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');`}</style>
      <div className="page-container">
        <div
          className="flex items-center justify-between w-full"
          style={{ minHeight: "90px" }}
        >
          <Link to="/" className="flex-shrink-0" style={{ marginTop: "0px" }}>
            <img
              src="https://greek-iptv.store/wp-content/uploads/2026/01/ChatGPT-Image-19-janv.-2026-15_00_39-Copie.png"
              alt="greek iptv"
              className="h-auto"
              style={{ width: "102px", maxHeight: "135px", objectFit: "contain" }}
            />
          </Link>

          <MenuProvider menu_id="16">
            <NavMenuContent />
          </MenuProvider>

          <div className="hidden lg:flex items-center" style={{ marginLeft: "auto" }}>
            <Button
              style={{
                backgroundColor: "#0D5EAF",
                color: "#ffffff",
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                borderRadius: "7px",
                padding: "10px 20px",
                border: "none",
                boxShadow: "none",
                minHeight: "40px",
                whiteSpace: "nowrap",
                transition: "all 0.12s cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              }}
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}