import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Rehan Khan. All rights reserved.
      </p>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <a href="tel:+917898689420" className="hover:text-primary transition-colors flex items-center gap-1">
          <Phone size={14} /> 7898689420
        </a>
        <span>|</span>
        <a href="mailto:rehan748986@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1">
          <Mail size={14} /> rehan748986@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/rehan-khan-99" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
