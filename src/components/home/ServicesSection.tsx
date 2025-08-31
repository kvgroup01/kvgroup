import React from 'react';
import { Code, Zap, Bot, Globe, TrendingUp, BarChart3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Softwares',
      description: 'Soluções personalizadas e escaláveis para seu negócio'
    },
    {
      icon: Zap,
      title: 'Automações',
      description: 'Otimize processos e aumente a eficiência operacional'
    },
    {
      icon: Bot,
      title: 'Agentes de IA',
      description: 'Inteligência artificial para revolucionar sua empresa'
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão que geram resultados'
    },
    {
      icon: TrendingUp,
      title: 'Tráfego Pago',
      description: 'Campanhas estratégicas para maximizar seu ROI'
    },
    {
      icon: BarChart3,
      title: 'Dashboards Personalizados',
      description: 'Visualização inteligente de dados para decisões estratégicas'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;