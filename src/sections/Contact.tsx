import { Mail, Phone, Send } from "lucide-react";

const stars = Array.from({ length: 14 }, (_, index) => ({
  top: `${8 + ((index * 17) % 84)}%`,
  left: `${2 + ((index * 23) % 96)}%`,
  size: 2 + (index % 2),
}));

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#070a14]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl pt-10 lg:pt-24">
            <span className="text-sm uppercase tracking-[0.35em] text-primary/80">
              Contact
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Get in <span className="text-primary">Touch</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-lg">
              Whether you have a question, want to work together, or just want
              to say hi, feel free to drop a message. I look forward to hearing
              from you!
            </p>

            <div className="mt-10 space-y-5 text-base">
              <a
                href="mailto:thilakarathnavn@gmail.com"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5 text-white/80" />
                <span>
                  Email:{" "}
                  <span className="text-primary">
                    thilakarathnavn@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+94779710453"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5 text-white/80" />
                <span>
                  Phone: <span className="text-primary">+94 77 9710 453</span>
                </span>
              </a>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6 md:p-10 shadow-2xl shadow-black/30 border border-white/5">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md bg-[#3b4557] px-4 py-4 text-white placeholder:text-white/40 outline-none transition-colors focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md bg-[#3b4557] px-4 py-4 text-white placeholder:text-white/40 outline-none transition-colors focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-md bg-[#3b4557] px-4 py-4 text-white placeholder:text-white/40 outline-none transition-colors focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/80"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-white/20 pt-6 text-center text-sm text-blue-200/80">
          © 2026 Vishmitha Nipun. All rights reserved.
        </div>
    </section>
  );
};
