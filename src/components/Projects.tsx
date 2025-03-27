
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import {SiGithub} from "react-icons/si";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: "DevMatch",
    description: "Plataforma que conecta desenvolvedores a projetos open-source. Facilita a descoberta de oportunidades e recomenda projetos com" +
      " base nas suas habilidades.",
    image: "DevMatch.png",
    tags: ["Laravel", "MySQL", "React", "GitHub API"],
    demo: "https://open-source-match.vercel.app/"
  },
  {
    id: 2,
    title: "Ludus Nexus",
    description: "Ludus Nexus é uma plataforma de matchmaking para jogadores de RPG e outros jogos cooperativos.",
    image: "LudusNexus.png",
    tags: ["Laravel", "MySQL", "React", "GitHub API"],
    demo: "https://ludus-nexus-demo.vercel.app"
  },
  {
    id: 3,
    title: "Code & Coffee",
    description: "Site desenvolvido para hospedar e compartilhar meus próprios artigos, proporcionando uma experiência de leitura moderna e" +
      " acessível.",
    image: "CodeCoffee.png",
    tags: ["React", "SupaBase"],
    demo: "https://code-coffee-blog.vercel.app"
  },
  {
    id: 4,
    title: "CRUD CNPJ API",
    description: "CRUD simples validando CNPJ com API gratuita.",
    image: "CrudApi.png",
    tags: ["React", "TypeScript", "NestJS", "API"],
    github: "https://github.com/Joaovitor12j/crud-cnpj-api",
    demo: "https://cnpj-api.vercel.app"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filters = ['all', 'Laravel', 'React', 'API', 'MySQL'];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(filter))
      );
    }
  }, [filter]);

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

    projectsRef.current.forEach(project => {
      if (project) observer.observe(project);
    });

    return () => {
      projectsRef.current.forEach(project => {
        if (project) observer.unobserve(project);
      });
    };
  }, [filteredProjects]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current[index] = el;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meus Projetos</h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filterName => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === filterName
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80 text-gray-700'
                }`}
              >
                {filterName === 'all' ? 'Todos' : filterName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => addToRefs(el, index)}
              className="animate-on-scroll flex flex-col h-full transform transition-all duration-300 hover:translate-y-[-5px]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card flex flex-col h-full overflow-hidden">
                <div className="relative h-48 mb-4 overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-90"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary inline-flex items-center gap-1 text-sm"
                    >
                      <SiGithub size={16} />
                      <span>Código</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
