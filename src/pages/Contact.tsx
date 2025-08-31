import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Zap, Users, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { useWhatsAppLead } from '../hooks/useWhatsAppLead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { isModalOpen, currentMessage, whatsappNumber, openWhatsAppWithLead, closeModal } = useWhatsAppLead();

  const projectTypes = [
    'Criação de Sites',
    'Automação de Processos',
    'Agente de IA',
    'Landing Page',
    'Tráfego Pago',
    'Consultoria Digital',
    'Outro'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Disparar evento do Meta Pixel como Lead
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Contact Form',
          content_category: 'Contact Page',
          value: 1,
          currency: 'BRL'
        });
      }

      // Redirecionamento para WhatsApp
      const whatsappNumber = '5592993288939';
      const whatsappMessage = `📩 *Nova mensagem via site KV Group*

👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📱 *Telefone:* ${formData.phone || 'Não informado'}
🏢 *Empresa:* ${formData.company || 'Não informado'}
🎯 *Tipo de Projeto:* ${formData.projectType}
📝 *Mensagem:*
${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        company: '',
        message: ''
      });

      // Redirecionar para WhatsApp após breve delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <MessageSquare className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Vamos <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Conversar?</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Transforme sua ideia em realidade digital. Nossa equipe está pronta para 
            criar soluções extraordinárias para seu negócio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-yellow-400 mr-2" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 text-yellow-400 mr-2" />
              <span>Proposta personalizada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Main Content (Mobile First) */}
            <div className="lg:col-span-3 order-1">
              <div id="contact-form"></div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-yellow-500/20">
                <div className="mb-10">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Conte-nos Sobre Seu <span className="text-yellow-400">Projeto</span>
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas 
                    com uma proposta personalizada para suas necessidades.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Mensagem enviada! Redirecionando para WhatsApp...</span>
                  </div>
                )}

                {submitError && (
                  <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Nome Completo</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg"
                        placeholder="Seu nome"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">E-mail</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Telefone/WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-3 text-lg">Empresa</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">Tipo de Projeto</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg"
                      required
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3 text-lg">Mensagem</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full bg-gray-800/50 text-white px-5 py-4 rounded-xl border border-yellow-500/20 focus:border-yellow-400/60 focus:outline-none transition-all duration-300 text-lg resize-none"
                      placeholder="Conte-nos mais sobre seu projeto, objetivos e prazos..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                    </span>
                    <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info - Sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Fale <span className="text-yellow-400">Conosco</span>
                </h2>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">WhatsApp Direto</h3>
                        <p className="text-yellow-400 font-semibold text-lg">(92) 99328-8939</p>
                        <p className="text-gray-400 text-sm mt-1">Resposta imediata</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">E-mail Comercial</h3>
                        <p className="text-yellow-400 font-semibold text-lg">contato@kvgroup.com.br</p>
                        <p className="text-gray-400 text-sm mt-1">Propostas e parcerias</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Localização</h3>
                        <p className="text-yellow-400 font-semibold text-lg">Manaus, AM</p>
                        <p className="text-gray-400 text-sm mt-1">Atendimento nacional</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Horário de Atendimento</h3>
                        <p className="text-yellow-400 font-semibold">Segunda a Sexta</p>
                        <p className="text-gray-400 text-sm mt-1">9h às 18h (Brasília)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="mt-12 p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-500/30">
                  <h3 className="text-white font-bold text-lg mb-3">Precisa de uma resposta rápida?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Entre em contato via WhatsApp durante horário comercial
                  </p>
                  <button 
                    onClick={() => openWhatsAppWithLead('Olá! Preciso de uma resposta rápida sobre soluções digitais.')}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que Escolher a <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">KV Group?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Agilidade Extrema</h3>
              <p className="text-gray-300 leading-relaxed">
                Metodologia ágil que entrega resultados rápidos sem comprometer a qualidade. 
                Seu projeto sai do papel em tempo recorde.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equipe Especializada</h3>
              <p className="text-gray-300 leading-relaxed">
                Profissionais seniores com expertise comprovada em tecnologias de ponta 
                e estratégias de crescimento digital.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Suporte Dedicado</h3>
              <p className="text-gray-300 leading-relaxed">
                Acompanhamento personalizado durante todo o projeto e suporte contínuo 
                após a entrega para garantir seu sucesso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Como <span className="text-yellow-400">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Processo transparente e eficiente do primeiro contato à entrega
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análise', desc: 'Entendemos seu negócio e objetivos' },
              { step: '02', title: 'Estratégia', desc: 'Criamos um plano personalizado' },
              { step: '03', title: 'Desenvolvimento', desc: 'Executamos com excelência' },
              { step: '04', title: 'Entrega', desc: 'Lançamos e acompanhamos resultados' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-lg">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/60 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Seu Próximo <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Grande Projeto</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Está a um clique de distância. Vamos transformar sua visão em uma solução digital extraordinária.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              <span className="relative z-10">Iniciar Projeto</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
            
            <button 
              onClick={() => openWhatsAppWithLead('Olá! Quero falar com a equipe da KV Group sobre transformação digital.')}
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Ligar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        whatsappMessage={currentMessage}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
};

export default Contact;