import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  mintValue?: boolean;
};

const links: ContactLink[] = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anushna-patra", href: "#" },
  { icon: Github, label: "GitHub", value: "github.com/anushna-patra", href: "#" },
  { icon: Mail, label: "Email", value: "anushnapatrashreya@gmail.com", href: "mailto:anushnapatrashreya@gmail.com", mintValue: true },
  { icon: Phone, label: "Phone", value: "+91 75950 29257", href: "tel:+917595029257", mintValue: true },
];

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
      toast({ title: "Message sent", description: "Thanks for reaching out — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="reveal max-w-2xl mx-auto text-center mb-10">
          <div className="label-mint mb-3">Contact</div>
          <h2 className="text-3xl md:text-[36px] font-bold text-foreground mb-4">Let's connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Form */}
          <form
            onSubmit={onSubmit}
            className="reveal"
            style={{ backgroundColor: "#2A2A2D", borderRadius: "12px", padding: "32px" }}
            noValidate
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground text-xs uppercase tracking-wider">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  maxLength={100}
                  className="mt-1.5 bg-background border-subtle text-foreground"
                />
                {errors.name && <p className="text-sm text-destructive mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground text-xs uppercase tracking-wider">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                  className="mt-1.5 bg-background border-subtle text-foreground"
                />
                {errors.email && <p className="text-sm text-destructive mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground text-xs uppercase tracking-wider">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  rows={4}
                  maxLength={1000}
                  className="mt-1.5 bg-background border-subtle text-foreground resize-none"
                />
                {errors.message && <p className="text-sm text-destructive mt-1.5">{errors.message}</p>}
              </div>
              <Button type="submit" variant="mint" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>

          {/* Right: Links */}
          <div className="reveal">
            <div className="space-y-5">
              {links.map(({ icon: Icon, label, value, href, mintValue }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-md grid place-items-center shrink-0" style={{ backgroundColor: "rgba(62,207,164,0.1)" }}>
                    <Icon className="w-5 h-5 text-mint" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-foreground text-sm font-medium">{label}</div>
                    <a
                      href={href}
                      className={`text-[13px] truncate block transition-smooth hover:text-mint ${mintValue ? "text-mint" : ""}`}
                      style={mintValue ? undefined : { color: "#A0A0A0" }}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm" style={{ color: "#A0A0A0" }}>
              Open to frontend roles, freelance projects, and collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
