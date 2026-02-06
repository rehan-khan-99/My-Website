import { useState, useRef } from "react";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const openWhatsApp = () => {
    const text = `Hello, I'm ${form.name}.%0AEmail: ${form.email}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/917898689420?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSending(true);

    // Send via EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "rehan748986@gmail.com",
          subject: "New Client Inquiry from Portfolio Website",
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch {
      // EmailJS may not be configured yet — still open WhatsApp
    }

    // Open WhatsApp
    openWhatsApp();

    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="section-padding pt-32">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h1>
        <p className="text-muted-foreground mb-12">
          Have a project in mind? Let's talk.
        </p>

        {submitted ? (
          <div className="rounded-lg border border-primary/40 bg-primary/5 p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
            <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                name="from_name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                name="from_email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"} <Send size={16} />
            </button>
          </form>
        )}

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
          <div className="flex flex-col gap-3">
            <a href="tel:+917898689420" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Phone size={16} /> 📞 Call / WhatsApp: 7898689420
            </a>
            <a href="mailto:rehan748986@gmail.com" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Mail size={16} /> 📧 rehan748986@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://github.com/rehan-khan-99" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
