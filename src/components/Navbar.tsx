import {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageDropdown from './LanguageDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'projects', 'resume', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="text-lg md:text-xl font-bold">
            <span className="text-primary">Dev</span>Portfolio
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="#hero"
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              Sobre
            </a>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projetos
            </a>
            <a
              href="#resume"
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              Currículo
            </a>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contato
            </a>
            <a
              href="https://code-coffee-blog.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ml-4"
            >
              Blog
            </a>
            <div className="flex items-center ml-4 pl-2 space-x-3">
              <LanguageDropdown/>
              <ThemeToggle/>
            </div>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageDropdown/>
            <ThemeToggle/>
            <button
              className="flex items-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24}/>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-6 text-xl">
            <a
              href="#hero"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projetos
            </a>
            <a
              href="#resume"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('resume');
              }}
            >
              Currículo
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contato
            </a>
            <a
              href="https://code-coffee-blog.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
            >
              Blog
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
