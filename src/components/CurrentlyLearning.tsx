
import { useState } from 'react';
import { Brain, Code, Laptop, Book, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

type LearningItemType = {
  id: number;
  title: {
    'pt-BR': string;
    'en-US': string;
  };
  description: {
    'pt-BR': string;
    'en-US': string;
  };
  progress: number;
  icon: React.ReactNode;
};

const learningItems: LearningItemType[] = [
  {
    id: 1,
    title: {
      'pt-BR': 'Design System',
      'en-US': 'Design System',
    },
    description: {
      'pt-BR': 'Atualmente estudando princípios, padrões e boas práticas para a criação de um Design System escalável, consistente e acessível, ' +
        'com foco em reutilização de componentes, padronização visual e melhor experiência do usuário.',
      'en-US': 'Currently studying principles, standards and best practices for creating a scalable, consistent and accessible Design System, ' +
        'with a focus on component reuse, visual standardization and better user experience.',
    },
    progress: 30,
    icon: <Code className="h-6 w-6 text-primary" />
  }
];

const CurrentlyLearning = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const sectionTitle = language === 'pt-BR' ? 'O Que Estou Estudando' : "What I'm Learning";
  const sectionDescription = language === 'pt-BR'
    ? 'Atualmente estou focado nestas tecnologias e conceitos'
    : 'Currently focusing on these technologies and concepts';

  return (
    <section id="learning" className="py-24 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">{sectionTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {learningItems.map((item) => (
            <div key={item.id} className="animate-on-scroll">
              <Card
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  expanded === item.id ? 'ring-2 ring-primary/50' : ''
                }`}
                onClick={() => toggleExpand(item.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <CardTitle className="text-xl">{item.title[language]}</CardTitle>
                    </div>
                    <div className="text-sm font-medium">
                      {item.progress}%
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-justify">
                    {item.description[language]}
                  </CardDescription>

                  <div className="mt-4">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
