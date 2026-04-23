import { useState } from 'react';
import { Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './AnimatedSection';
import emailjs from '@emailjs/browser';
import { useLang } from '@/i18n/LangContext';

const ContactSection = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: t.contact.fill_all, variant: 'destructive' });
      return;
    }
    setSending(true);
    try {
      await emailjs.send('service_t603smm', 'template_m6bk0jb', { from_name: form.name, from_email: form.email, message: form.message }, 'RyBFE8Pg9Jn79Rkoc');
      toast({ title: t.contact.success_title, description: t.contact.success_desc });
      setForm({ name: '', email: '', message: '' });
    } catch {
      toast({ title: t.contact.error_title, description: t.contact.error_desc, variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  const socials = [
    { icon: Github, href: 'https://github.com/parallax-source', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pedrofilipedlb/', label: 'LinkedIn' },
    { icon: null, href: 'https://wa.me/5528999681823', label: 'WhatsApp' },
  ];

  return (
    <section id='contact' className='section-padding'>
      <div className='container mx-auto max-w-3xl'>
        <AnimatedSection>
          <h2 className='text-3xl md:text-4xl font-heading font-bold mb-2 text-center'>
            {t.contact.title} <span className='text-gradient'>{t.contact.highlight}</span>
          </h2>
          <p className='text-muted-foreground mb-12 text-center'>{t.contact.description}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className='glass rounded-xl p-6 md:p-8 space-y-5'>
            <div className='grid sm:grid-cols-2 gap-4'>
              <Input placeholder={t.contact.name_placeholder} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
              <Input type='email' placeholder={t.contact.email_placeholder} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
            </div>
            <Textarea placeholder={t.contact.message_placeholder} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
            <Button type='submit' className='w-full gap-2' disabled={sending}>
              <Send size={16} />{sending ? t.contact.sending : t.contact.send}
            </Button>
          </form>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className='flex justify-center gap-6 mt-8'>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target='_blank' rel='noopener noreferrer' aria-label={s.label} className='w-11 h-11 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all'>
                {s.icon ? <s.icon size={20} /> : <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.541 5.943L.057 23.571a.75.75 0 00.921.921l5.628-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-5.004-1.378l-.36-.214-3.733.984.999-3.648-.235-.374A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;