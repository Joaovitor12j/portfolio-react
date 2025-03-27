import { useEffect, useRef } from 'react';
import {Server, Terminal} from 'lucide-react';
import {SiDocker, SiGit, SiGitlab, SiJira, SiLaravel, SiMysql, SiPhp, SiReact, SiSymphony, SiTailwindcss} from 'react-icons/si';
import {FaAws, FaNodeJs, FaVuejs} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";

const IconWrapper = ({ icon: Icon, ...props }) => (
  <Icon size={20} className="text-primary mr-2" {...props} />
);

const skills = {
  backend: [
    { name: 'PHP', icon: <IconWrapper icon={SiPhp}/> },
    { name: 'Laravel', icon: <IconWrapper icon={SiLaravel}/> },
    { name: 'Symfony', icon: <IconWrapper icon={SiSymphony}/> },
    { name: 'Node', icon: <IconWrapper icon={FaNodeJs}/> },
    { name: 'MySQL', icon: <IconWrapper icon={SiMysql}/> },
    { name: 'API RESTful', icon: <IconWrapper icon={Server}/> },
  ],
  frontend: [
    { name: 'JavaScript', icon: <IconWrapper icon={DiJavascript}/> },
    { name: 'React', icon: <IconWrapper icon={SiReact}/> },
    { name: 'Vue.js', icon: <IconWrapper icon={FaVuejs}/> },
    { name: 'TailwindCSS', icon: <IconWrapper icon={SiTailwindcss}/> },
  ],
  others: [
    { name: 'Git', icon: <IconWrapper icon={SiGit}/> },
    { name: 'GitLab', icon: <IconWrapper icon={SiGitlab}/> },
    { name: 'Jira', icon: <IconWrapper icon={SiJira}/> },
    { name: 'Docker', icon: <IconWrapper icon={SiDocker}/> },
    { name: 'AWS', icon: <IconWrapper icon={FaAws}/> },
    { name: 'CI/CD', icon: <IconWrapper icon={Terminal}/> },
  ]
};

const About = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={(el) => addToRefs(el, 0)} className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Minha Jornada</h3>
            <p className="mb-4">
              Desenvolvedor FullStack com mais de 4 anos de experiência em PHP/Laravel
              e React. Especializado em criar aplicações web robustas e escaláveis, com
              foco em código limpo e boas práticas de desenvolvimento.
            </p>
            <p className="mb-4">
              Apaixonado por resolver problemas complexos com soluções tecnológicas
              simples e eficientes. Experiência em trabalhar com equipes de desenvolvimento.
            </p>
            <p>
              Sempre em busca de novos desafios e aprendizados no mundo da programação.
              Atualmente focado em design system e desenvolvimento orientado a testes.
            </p>
          </div>

          <div ref={(el) => addToRefs(el, 1)} className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Habilidades</h3>

            <div className="grid grid-cols-1 gap-6">
              <div className="glass-card p-6">
                <h4 className="text-lg font-semibold mb-4">Backend</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.backend.map((skill) => (
                    <div key={skill.name} className="flex items-center p-2 hover:bg-blue-50/50 rounded-md transition-colors">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold mb-4">Frontend</h4>
                  <div className="flex flex-col space-y-3">
                    {skills.frontend.map((skill) => (
                      <div key={skill.name} className="flex items-center p-2 hover:bg-blue-50/50 rounded-md transition-colors">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold mb-4">Outros</h4>
                  <div className="flex flex-col space-y-3">
                    {skills.others.map((skill) => (
                      <div key={skill.name} className="flex items-center p-2 hover:bg-blue-50/50 rounded-md transition-colors">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
