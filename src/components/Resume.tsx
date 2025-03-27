
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meu Currículo</h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card mb-6 overflow-hidden">
            <div className="flex justify-end p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-b">
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Download size={16} />
                <span>Baixar PDF</span>
              </a>
            </div>
            <div className="p-1 md:p-4 bg-white rounded-b-lg">
              <iframe 
                src="/resume.pdf#toolbar=0" 
                className="w-full h-[600px] border-0 rounded"
                title="Resume Preview"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Prefere ver a versão completa do meu currículo? Faça o download do arquivo PDF.
            </p>
            <a 
              href="/resume.pdf" 
              download 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Download size={16} />
              <span>Baixar Currículo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
