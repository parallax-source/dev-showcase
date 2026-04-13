import { useState } from "react";
import { Send, Github, Linkedin, Mail as MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos", variant: "destructive" });
      return;
    }
    toast({ title: "Mensagem enviada!", description: "Retornarei em breve." });
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:dev@email.com", label: "E-mail" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-center">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-center">
            Tem um projeto em mente? Adoraria ouvir sobre ele.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <Textarea
              placeholder="Sua mensagem..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
            />
            <Button type="submit" className="w-full gap-2">
              <Send size={16} />
              Enviar Mensagem
            </Button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-6 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
