import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
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
          <p className="text-secondary-muted">
            Open to frontend roles, freelance projects, and collaborations.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal max-w-2xl mx-auto p-7 md:p-8 rounded-xl bg-card border border-subtle"
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
                rows={5}
                maxLength={1000}
                className="mt-1.5 bg-background border-subtle text-foreground resize-none"
              />
              {errors.message && <p className="text-sm text-destructive mt-1.5">{errors.message}</p>}
            </div>
            <Button type="submit" variant="mint" size="lg" className="w-full" disabled={submitting}>
              <Send className="w-4 h-4" />
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-md border border-subtle grid place-items-center text-mint hover:bg-mint hover:text-primary-foreground transition-smooth"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="w-11 h-11 rounded-md border border-subtle grid place-items-center text-mint hover:bg-mint hover:text-primary-foreground transition-smooth"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
