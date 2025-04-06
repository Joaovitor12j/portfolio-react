import { useEffect, useRef } from 'react';
import {Server, Terminal} from 'lucide-react';
import {SiDocker, SiGit, SiGitlab, SiJira, SiLaravel, SiMysql, SiPhp, SiReact, SiSymphony, SiTailwindcss} from 'react-icons/si';
import {FaAws, FaNodeJs, FaVuejs} from "react-icons/fa";
import {DiJavascript} from "react-icons/di";
import {useLanguage} from "@/contexts/LanguageContext.tsx";

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
  const { language } = useLanguage();
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

  const about = language === 'pt-BR' ? 'Sobre Mim' : 'About Me';
  const title3 = language === 'pt-BR' ? 'Minha jornada' : 'My Journey';
  const block1 = language === 'pt-BR' ?
    'Sou um Desenvolvedor PHP Full Stack com sólida experiência no desenvolvimento de sistemas complexos e integrações críticas,\n' +
    ' especialmente no setor fiscal e contábil. Ao longo da minha carreira, tenho atuado na criação e otimização de soluções escaláveis,\n' +
    ' utilizando frameworks robustos como Laravel e Symfony, e tecnologias modernas de front-end como React e Vue.' :
    ' I\'m a Full Stack PHP Developer with solid experience in developing complex systems and critical integrations,\n' +
    ' especially in the tax and accounting sector. Throughout my career, I have worked on creating and optimizing scalable solutions,\n' +
    ' using robust frameworks such as Laravel and Symfony, and modern front-end technologies such as React and Vue.';
  const block2 = language === 'pt-BR' ?
    'Atualmente, na IXC Soft, sou responsável por implementar sistemas que automatizam processos fiscais, como o cálculo de tributos e a\n' +
    ' emissão de notas fiscais eletrônicas, sempre buscando aumentar a eficiência e a segurança das aplicações. Minha atuação inclui a\n' +
    ' integração com APIs governamentais e privadas, garantindo a conformidade e a agilidade na troca de informações fiscais em tempo real.' :
    'At IXC Soft, I am currently responsible for implementing systems that automate tax processes, such as calculating taxes and\n' +
    ' issuing electronic invoices, always seeking to increase the efficiency and security of the applications. My work includes\n' +
    ' integration with government and private APIs, ensuring compliance and agility in the exchange of tax information in real time.';
  const block3 = language === 'pt-BR' ?
    'Além disso, possuo experiência com processamento assíncrono e gerenciamento de filas (utilizando RabbitMQ, Redis e SQS), o que me\n' +
    ' permite desenvolver soluções capazes de manipular grandes volumes de dados sem comprometer a performance do sistema. Essa expertise é\n' +
    ' reforçada por minha formação em Análise de Sistemas e pela prática contínua de metodologias ágeis, que asseguram a entrega de valor em\n' +
    ' ciclos curtos e eficientes.' :
    'In addition, I have experience with asynchronous processing and queue management (using RabbitMQ, Redis and SQS), which\n' +
    ' allows me to develop solutions capable of handling large volumes of data without compromising system performance. This expertise is\n' +
    ' reinforced by my background in Systems Analysis and my continuous practice of agile methodologies, which ensure the delivery of value in\n' +
    ' short and efficient cycles.';
  const block4 = language === 'pt-BR' ?
    'Sou apaixonado por inovação e melhoria contínua, sempre em busca de desafios que me permitam transformar processos e agregar valor tanto\n' +
    ' para a equipe quanto para os clientes. Com um perfil que une profundidade técnica e visão estratégica, estou comprometido em desenvolver\n' +
    ' soluções que não apenas atendam, mas superem as expectativas do mercado.' :
    'I\'m passionate about innovation and continuous improvement, and I\'m always looking for challenges that allow me to transform processes and add value both\n' +
    ' for the team and for clients. With a profile that combines technical depth and strategic vision, I am committed to developing\n' +
    ' solutions that not only meet but exceed market expectations.';

  const Skills = language === 'pt-BR' ? 'Habilidades' : 'Skills';
  const Others = language === 'pt-BR' ? 'Outros' : 'Others';

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{about}</h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div ref={(el) => addToRefs(el, 0)} className="animate-on-scroll text-justify">
            <h3 className="text-2xl font-bold mb-6">{title3}</h3>
            <p className="mb-4">{block1}</p>
            <p className="mb-4">{block2}</p>
            <p className="mb-4">{block3}</p>
            <p className="mb-4">{block4}</p>
          </div>

          <div ref={(el) => addToRefs(el, 1)} className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">{Skills}</h3>

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
                  <h4 className="text-lg font-semibold mb-4">{Others}</h4>
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
