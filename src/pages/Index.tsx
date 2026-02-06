import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Node.js", "Laravel", "MySQL", "Django",
];

const services = [
  { title: "Website Development", desc: "End-to-end custom websites built for performance and scalability." },
  { title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces with modern frameworks." },
  { title: "Backend API Integration", desc: "Robust REST APIs using Node.js or Laravel with MySQL." },
  { title: "Responsive Design", desc: "Seamless experiences across every device and screen size." },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container mx-auto max-w-3xl">
          <p className="font-mono text-primary text-sm mb-4 animate-fade-in-up">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Rehan Khan.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Full Stack Web Developer.
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            I build modern, responsive, and high-performance websites and web applications.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary font-medium text-sm hover:bg-primary/10 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Skills & Technologies</h2>
          <p className="text-muted-foreground mb-10">Tools I work with every day.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-mono text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-2">Services</h2>
            <p className="text-muted-foreground">What I can do for you.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:glow transition-all"
              >
                <Code2 className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
