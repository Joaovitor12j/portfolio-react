
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from '../contexts/LanguageContext';

const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (newLanguage: 'pt-BR' | 'en-US') => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center space-x-1 focus:outline-none">
        {language === 'pt-BR' ? (
          <span className="flex items-center">
            <img 
              src="https://flagcdn.com/w20/br.png" 
              width="20" 
              alt="Brasil" 
              className="mr-1"
            />
            <span className="sr-only md:not-sr-only md:inline text-sm">PT</span>
          </span>
        ) : (
          <span className="flex items-center">
            <img 
              src="https://flagcdn.com/w20/us.png" 
              width="20" 
              alt="United States" 
              className="mr-1"
            />
            <span className="sr-only md:not-sr-only md:inline text-sm">EN</span>
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-slate-800 border dark:border-slate-700">
        <DropdownMenuItem 
          className={`flex items-center space-x-2 ${language === 'pt-BR' ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
          onClick={() => handleLanguageChange('pt-BR')}
        >
          <img 
            src="https://flagcdn.com/w20/br.png" 
            width="20" 
            alt="Brasil" 
          />
          <span>Português</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className={`flex items-center space-x-2 ${language === 'en-US' ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
          onClick={() => handleLanguageChange('en-US')}
        >
          <img 
            src="https://flagcdn.com/w20/us.png" 
            width="20" 
            alt="United States" 
          />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
