
import { useState, FormEvent } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import {AiFillGithub} from "react-icons/ai";
import {SiGithub} from "react-icons/si";
import {FaLinkedin} from "react-icons/fa";
import {useLanguage} from "@/contexts/LanguageContext.tsx";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      await fetch('https://formspree.io/f/xjkyoqlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const title1 = language === 'pt-BR' ? 'Entre em contato' : 'Contact me';
  const title2 = language === 'pt-BR' ? 'Informações de Contato' : 'Contact Information';
  const text1 = language === 'pt-BR' ?
    'Estou disponível para trabalhos freelance, oportunidades de emprego\n' +
    ' ou apenas para trocar ideias sobre tecnologia e desenvolvimento.' :
    'I\'m available for freelance work, job opportunities\n' +
    ' or just to exchange ideas about technology and development.';

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{title1}</h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">{title2}</h3>

            <div className="space-y-6">
              <p className="text-gray-600">{text1}</p>

              <div>
                <p className="font-medium mb-2">Email:</p>
                <a
                  href="mailto:joaovitor12j@gmail.com"
                  target="_blank"
                  className="text-primary hover:underline inline-flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>joaovitor12j@gmail.com</span>
                </a>
              </div>

              <div>
                <p className="font-medium mb-4">{language === 'pt-BR' ? 'Redes Sociais: ' : 'Social Media: '}</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Joaovitor12j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary inline-flex items-center gap-2"
                  >
                    <SiGithub size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/joao-vitorss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary inline-flex items-center gap-2"
                  >
                    <FaLinkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full mt-4 inline-flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">
                  Ocorreu um erro ao enviar a mensagem. Tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
