import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl md:px-10
  transition-all duration-500 z-50 rounded-2xl
  ${isScrolled ? "glass-strong py-3 shadow-xl" : "glass py-4"}`}
    >
      <nav className="container mx-auto px-4 md:px-0 flex items-center justify-between ">
        <a
          href="#"
          style={{ fontFamily: "Priestacy" }}
          className="text-2xl tracking-tight hover:text-primary transition-colors duration-300 px-1"
        >
          vishmitha<span className="text-white">. </span>me
        </a>
        {/* Desktop Nav */}
        <div className="flex items-center gap-1">
          <div className="glass rounded-full px-4 py-2 hidden md:flex gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary transition-colors duration-300 px-4 py-2 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in ">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button>Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
