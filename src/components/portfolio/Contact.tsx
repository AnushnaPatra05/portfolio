import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be under 1000 characters"),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-hero text-white">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span className="text-sm font-semibold text-electric-light uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-3 mb-6">
              Let's build something reliable together.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
              Open to new opportunities, collaborations, and interesting Angular engineering
              challenges. Drop a message and I'll respond within a couple of days.
            </p>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric-light hover:bg-white/10 transition-smooth"
              >
                <span className="w-10 h-10 rounded-md bg-electric grid place-items-center">
                  <Linkedin className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-white/60">Connect professionally</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric-light hover:bg-white/10 transition-smooth"
              >
                <span className="w-10 h-10 rounded-md bg-electric grid place-items-center">
                  <Github className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-white/60">View code & projects</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric-light hover:bg-white/10 transition-smooth"
              >
                <span className="w-10 h-10 rounded-md bg-electric grid place-items-center">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-white/60">Direct inquiries</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal p-7 md:p-9 rounded-2xl bg-white text-foreground shadow-card"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-navy">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  maxLength={100}
                  className="mt-1.5"
                />
                {errors.name && <p className="text-sm text-destructive mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-navy">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                  className="mt-1.5"
                />
                {errors.email && <p className="text-sm text-destructive mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-navy">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  maxLength={1000}
                  className="mt-1.5 resize-none"
                />
                {errors.message && <p className="text-sm text-destructive mt-1.5">{errors.message}</p>}
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={submitting}>
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
