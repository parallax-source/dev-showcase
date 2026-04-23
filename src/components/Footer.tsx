import { useLang } from "@/i18n/LangContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-heading font-semibold">&lt;Dev Parallax/&gt;</span> {t.footer.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;