
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullTexts = ['Backend', 'FullStack'];
  const currentTextIndex = useRef(0);
  const charIndex = useRef(0);
  const typingDelay = 100;
  const erasingDelay = 75;
  const newTextDelay = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const type = () => {
      const currentFullText = fullTexts[currentTextIndex.current];

      if (isTyping) {
        if (charIndex.current < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, charIndex.current + 1));
          charIndex.current++;
          timer = setTimeout(type, typingDelay);
        } else {
          setIsTyping(false);
          timer = setTimeout(type, newTextDelay);
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current--;
          setDisplayText(currentFullText.substring(0, charIndex.current));
          timer = setTimeout(type, erasingDelay);
        } else {
          setIsTyping(true);
          currentTextIndex.current = (currentTextIndex.current + 1) % fullTexts.length;
          timer = setTimeout(type, typingDelay);
        }
      }
    };

    timer = setTimeout(type, newTextDelay);
    
    return () => clearTimeout(timer);
  }, [isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-start pt-24 pb-20 px-4 md:px-8"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-2">Olá, me chamo </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gradient-primary dark:text-gradient">
              João Vitor Santos
            </h1>
            <div className="mb-6 h-12">
              <h2 className="text-2xl md:text-3xl mb-4 flex items-center justify-center font-light text-gray-700 dark:text-gray-300">
                Desenvolvedor <span className="typing-container ml-2 flex items-center">
                  <span className="typing-text text-primary align-middle">{displayText}</span>
                </span>
                <span className="ml-2">| PHP & Laravel</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Criando soluções elegantes para problemas complexos com código limpo e eficiente.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Projetos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('resume')}
              >
                Currículo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
          className="text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
