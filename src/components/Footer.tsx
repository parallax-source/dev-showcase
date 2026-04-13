const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-heading font-semibold">&lt;Dev /&gt;</span> — Feito com dedicação e muito café ☕
      </p>
    </div>
  </footer>
);

export default Footer;
