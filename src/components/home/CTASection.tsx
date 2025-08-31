import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Zap, Users, Trophy, Target, Clock, Star, Rocket, Shield, Award, Globe } from 'lucide-react';
import LeadCaptureModal from '../LeadCaptureModal';
import { useWhatsAppLead } from '../../hooks/useWhatsAppLead';

const CTASection = () => {
  const navigate = useNavigate();
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    years: 0
  });

  const { isModalOpen, currentMessage, whatsappNumber, openWhatsAppWithLead, closeModal } = useWhatsAppLead();

  const finalStats = {
    projects: 10,
    clients: 10,
    satisfaction: 100,
    years: 3
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        projects: Math.floor(finalStats.projects * progress),
        clients: Math.floor(finalStats.clients * progress),
        satisfaction: Math.floor(finalStats.satisfaction * progress),
        years: Math.floor(finalStats.years * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'Projetos Entregues',
      value: animatedStats.projects,
      suffix: '+',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Clientes Satisfeitos',
      value: animatedStats.clients,
      suffix: '+',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Star,
      title: 'Taxa de Satisfação',
      value: animatedStats.satisfaction,
      suffix: '%',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Target,
      title: 'Anos de Experiência',
      value: animatedStats.years,
      suffix: '+',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Inovação Constante',
      description: 'Sempre utilizamos as tecnologias mais avançadas do mercado'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Seus dados e projetos protegidos com os mais altos padrões'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Cada projeto é tratado com excelência e atenção aos detalhes'
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      description: 'Soluções que funcionam em qualquer lugar do mundo'
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    openWhatsAppWithLead(message);
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-t from-gray-900 via-black to-gray-900 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Heading */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Números Que <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Falam</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nossa trajetória de sucesso construída com excelência e dedicação
            </p>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {achievement.value}{achievement.suffix}
                </div>
                
                <h3 className="text-gray-300 font-medium text-lg">
                  {achievement.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-12 rounded-3xl border border-yellow-500/30 max-w-4xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transforme Sua <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Visão</span> em Realidade
              </h3>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Junte-se aos nossos clientes satisfeitos e descubra como a tecnologia pode revolucionar seu negócio
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de falar com um especialista sobre soluções digitais para meu negócio.')}
                  className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
                >
                  <span className="relative z-10">Falar com Especialista</span>
                  <Phone className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/contato')}
                  className="inline-flex items-center px-10 py-5 border-2 border-yellow-400 text-yellow-400 font-bold text-xl rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  Ver Mais Detalhes
                  <ArrowRight className="ml-3 w-6 h-6" />
                </button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Resposta rápida</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Consultoria gratuita</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  <span>Proposta personalizada</span>
                </div>
              </div>
            </div>
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
    </>
  );
};

export default CTASection;