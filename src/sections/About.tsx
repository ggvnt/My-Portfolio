import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Hi, I’m Vishmitha Nipun, an enthusiastic and dedicated
                Full-Stack Developer with hands-on experience in building
                scalable and user-friendly web applications. I specialize in the
                MERN stack and ASP.NET Core, with strong skills in React,
                TypeScript, Node.js, SQL Server, PostgreSQL, and MongoDB.
              </p>
              <p>
                During my internship I developed full-stack applications
                including a food delivery/e-commerce platform and a social
                media–style application. I worked on RESTful API development,
                authentication systems, role-based access control, and
                responsive frontend interfaces using Tailwind CSS. I enjoy
                applying clean architecture principles and writing
                well-structured, maintainable code.
              </p>
              <p>
                I am currently pursuing a BSc (Hons) in Information Technology,
                majoring in Web Development and Design at SLIIT. I am passionate
                about learning new technologies, solving real-world problems,
                and continuously improving my technical and professional skills.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>{" "}
        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 mt-7">
          <p className="text-lg font-medium italic text-foreground">
            "My mission is to create digital experiences that are not just
            functional, but truly delightful — products that users love to use
            and developers love to maintain."
          </p>
        </div>
      </div>
    </section>
  );
};
