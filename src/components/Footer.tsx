
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <a href="#hero" className="text-xl font-bold mb-4">
            <span className="text-primary">Dev</span>Portfolio
          </a>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#hero" className="text-sm text-gray-600 hover:text-primary hover:scale-105 transition-transform">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-primary hover:scale-105 transition-transform">
              Sobre
            </a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-primary hover:scale-105 transition-transform">
              Projetos
            </a>
            <a href="#resume" className="text-sm text-gray-600 hover:text-primary hover:scale-105 transition-transform">
              Currículo
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-primary hover:scale-105 transition-transform">
              Contato
            </a>
            <a 
              href="https://code-coffee-blog.vercel.app/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-primary hover:text-primary/80 transition-colors"
              title="Visitar meu blog"
            >
              Blog
            </a>
          </nav>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>© {currentYear} Portfolio.</span>
            <span className="inline-flex items-center">
              Feito por João Vitor Santos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
