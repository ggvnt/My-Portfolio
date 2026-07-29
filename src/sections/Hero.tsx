import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { FC, useMemo } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Download,
  ChevronDown,
} from "lucide-react";

type Dot = {
  left: number;
  top: number;
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero: FC = () => {
  const dots: Dot[] = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg-image.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="space-y-6 text-center md:text-left animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Software Engineer
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary glow-text">Vishmitha</span>
            <br />
            Full Stack Developer
          </h1>

          <p className="text-muted-foreground max-w-xl">
            I build scalable, high-performance web applications using MERN stack
            and .NET clean architecture with modern UI design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="md">
              Contact Me <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <AnimatedBorderButton>
              <Download className="w-5 h-5" />
              Download CV
            </AnimatedBorderButton>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            {[
              { icon: Github, href: "https://github.com/ggvnt" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/vishmitha-thilakarathna-1922a42b5",
              },
              { icon: Twitter, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

            <img
              src="/profilephoto.png"
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl"
            />

            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-700">
              <div className="text-2xl font-bold text-primary">6+</div>
              <div className="text-xs text-muted-foreground">Months Exp.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Cloud */}
      <div className="mt-20 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2 rounded-full border border-primary/20
                 bg-primary/5 backdrop-blur-md
                 text-sm font-medium tracking-wide
                 hover:scale-110 hover:bg-primary/15 hover:text-primary
                 transition-all duration-300 cursor-default
                 animate-float"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
