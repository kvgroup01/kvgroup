import React from 'react';
import { Target, Eye, Heart, Users, Award, Zap, Globe, TrendingUp } from 'lucide-react';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { useWhatsAppLead } from '../hooks/useWhatsAppLead';

const About = () => {
  const { isModalOpen, currentMessage, whatsappNumber, openWhatsAppWithLead, closeModal } = useWhatsAppLead();

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes através de tecnologia de ponta e estratégias personalizadas.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser a referência global em transformação digital, conectando tecnologia e estratégia para criar o futuro dos negócios digitais.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Inovação constante, transparência total, excelência em cada entrega e compromisso inabalável com resultados excepcionais para nossos clientes.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projetos Entregues' },
    { number: '100%', label: 'Satisfação do Cliente' },
    { number: '3+', label: 'Anos de Experiência' },
    { number: '10+', label: 'Clientes Satisfeitos' }
  ];

  const expertise = [
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Criamos sistemas que trabalham 24/7 para otimizar seus processos'
    },
    {
      icon: Globe,
      title: 'Presença Digital',
      description: 'Desenvolvemos sua marca no ambiente digital com estratégias eficazes'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Escalável',
      description: 'Soluções que crescem junto com seu negócio, sem limitações'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Padrão de excelência em cada projeto, do conceito à entrega'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Quem <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Somos</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Uma agência especializada em transformação digital, dedicada a criar 
            soluções inovadoras que conectam tecnologia, estratégia e resultados extraordinários.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Nossa <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">História</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  A KV Group nasceu em 2020 da visão de democratizar o acesso à tecnologia de ponta. 
                  Nossa missão sempre foi clara: transformar ideias em soluções digitais que geram 
                  impacto real nos negócios dos nossos clientes.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos expertise em diversas áreas da tecnologia, 
                  desde desenvolvimento de software até inteligência artificial, sempre mantendo 
                  o foco na excelência e na inovação.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais agências de transformação digital, 
                  com uma equipe especializada e uma carteira de clientes satisfeitos em diversos segmentos.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-8 rounded-2xl border border-yellow-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Foco</h3>
                    <p className="text-gray-300 text-sm">Resultados mensuráveis</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Agilidade</h3>
                    <p className="text-gray-300 text-sm">Entregas rápidas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Qualidade</h3>
                    <p className="text-gray-300 text-sm">Padrão premium</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Alcance</h3>
                    <p className="text-gray-300 text-sm">Soluções globais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Pilares</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-400 mb-6">{value.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combinamos conhecimento técnico avançado com visão estratégica de negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Equipe</span>
            </h2>
            <p className="text-xl text-gray-300">
              Profissionais especializados e apaixonados por inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto border-4 border-yellow-500/30 group-hover:border-yellow-400/60 transition-all duration-300 flex items-center justify-center">
                  <Users className="w-20 h-20 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Kevin Silva
              </h3>
              <p className="text-yellow-400 font-semibold mb-4 text-lg">CEO & Founder</p>
              <p className="text-gray-300 leading-relaxed">
                Especialista em transformação digital com mais de 10 anos de experiência 
                liderando projetos inovadores e estratégias de crescimento.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto border-4 border-yellow-500/30 group-hover:border-yellow-400/60 transition-all duration-300 flex items-center justify-center">
                  <Users className="w-20 h-20 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Vitória Santos
              </h3>
              <p className="text-yellow-400 font-semibold mb-4 text-lg">CTO</p>
              <p className="text-gray-300 leading-relaxed">
                Líder técnica com expertise em IA e desenvolvimento de software, 
                responsável por arquitetar soluções tecnológicas de alta performance.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mx-auto border-4 border-yellow-500/30 group-hover:border-yellow-400/60 transition-all duration-300 flex items-center justify-center">
                  <Users className="w-20 h-20 text-yellow-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                Roberto Costa
              </h3>
              <p className="text-yellow-400 font-semibold mb-4 text-lg">Head of Marketing</p>
              <p className="text-gray-300 leading-relaxed">
                Estrategista digital focado em performance e crescimento, 
                especialista em campanhas de alto ROI e otimização de conversões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto Para <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Inovar?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua visão em realidade digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openWhatsAppWithLead('Olá! Gostaria de conhecer melhor a equipe da KV Group e discutir um projeto.')}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              <span className="relative z-10">Falar com Nossa Equipe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
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

export default About;