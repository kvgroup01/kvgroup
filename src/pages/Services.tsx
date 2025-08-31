import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Code, Zap, Bot, Globe, TrendingUp, ArrowRight, Play, Pause,
  Monitor, Smartphone, Database, Cloud, BarChart3, Users,
  MessageSquare, Brain, Target, Rocket, CheckCircle, Star,
  Timer, DollarSign, TrendingDown, Repeat, Settings, Cpu
} from 'lucide-react';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { useWhatsAppLead } from '../hooks/useWhatsAppLead';

const Services = () => {
  const navigate = useNavigate();
  const { isModalOpen, currentMessage, whatsappNumber, openWhatsAppWithLead, closeModal } = useWhatsAppLead();
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    efficiency: 0,
    cost: 0,
    time: 0,
    satisfaction: 0
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const services = [
    {
      id: 'software',
      icon: Code,
      title: 'Desenvolvimento de Software',
      subtitle: 'Aplicações que transformam negócios',
      description: 'Criamos sistemas personalizados que automatizam processos, aumentam a eficiência e geram resultados mensuráveis para sua empresa.',
      benefits: [
        { icon: Monitor, text: 'Aplicações Web Responsivas', metric: '100%' },
        { icon: Smartphone, text: 'Apps Mobile Nativas', metric: '99%' },
        { icon: Database, text: 'Sistemas de Gestão', metric: '95%' },
        { icon: Cloud, text: 'Soluções em Nuvem', metric: '98%' }
      ],
      metrics: {
        efficiency: 85,
        cost: 60,
        time: 75,
        satisfaction: 98
      },
      examples: [
        'Sistema de gestão de vendas que aumentou conversões em 40%',
        'App mobile que conectou 5.000+ usuários em 6 meses',
        'Plataforma de e-commerce com checkout otimizado'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Automações Inteligentes',
      subtitle: 'Eficiência que nunca para',
      description: 'Automatizamos tarefas repetitivas e integramos sistemas para que sua equipe foque no que realmente importa: crescer o negócio.',
      benefits: [
        { icon: Repeat, text: 'Processos Automatizados', metric: '90%' },
        { icon: Settings, text: 'Integrações de Sistema', metric: '95%' },
        { icon: Timer, text: 'Economia de Tempo', metric: '80%' },
        { icon: DollarSign, text: 'Redução de Custos', metric: '70%' }
      ],
      metrics: {
        efficiency: 92,
        cost: 70,
        time: 85,
        satisfaction: 95
      },
      examples: [
        'Automação de follow-up que aumentou vendas em 60%',
        'Integração que eliminou 15h semanais de trabalho manual',
        'Sistema de relatórios automáticos em tempo real'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'ai-agents',
      icon: Bot,
      title: 'Agentes de IA',
      subtitle: 'Inteligência que vende 24/7',
      description: 'Assistentes virtuais que qualificam leads, respondem dúvidas e convertem visitantes em clientes, mesmo quando você está dormindo.',
      benefits: [
        { icon: MessageSquare, text: 'Atendimento 24/7', metric: '100%' },
        { icon: Brain, text: 'Respostas Inteligentes', metric: '95%' },
        { icon: Target, text: 'Qualificação de Leads', metric: '85%' },
        { icon: Users, text: 'Conversão de Visitantes', metric: '40%' }
      ],
      metrics: {
        efficiency: 95,
        cost: 80,
        time: 90,
        satisfaction: 92
      },
      examples: [
        'Chatbot que qualifica 200+ leads por mês automaticamente',
        'Assistente de vendas que converte 35% dos visitantes',
        'Agente de suporte que resolve 80% das dúvidas instantaneamente'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'landing-pages',
      icon: Globe,
      title: 'Landing Pages',
      subtitle: 'Páginas que convertem',
      description: 'Criamos páginas otimizadas para conversão, com design persuasivo e copy que transforma visitantes em clientes pagantes.',
      benefits: [
        { icon: Target, text: 'Otimização CRO', metric: '45%' },
        { icon: Rocket, text: 'Carregamento Rápido', metric: '99%' },
        { icon: BarChart3, text: 'Taxa de Conversão', metric: '25%' },
        { icon: Star, text: 'Design Premium', metric: '100%' }
      ],
      metrics: {
        efficiency: 88,
        cost: 50,
        time: 60,
        satisfaction: 96
      },
      examples: [
        'Landing page que gerou R$ 50k em vendas no primeiro mês',
        'Página de captura com 35% de conversão de leads',
        'Site institucional que aumentou credibilidade em 200%'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'paid-traffic',
      icon: TrendingUp,
      title: 'Tráfego Pago',
      subtitle: 'Investimento que retorna',
      description: 'Campanhas estratégicas que geram leads qualificados e vendas reais, com ROI comprovado e otimização contínua.',
      benefits: [
        { icon: Target, text: 'Segmentação Precisa', metric: '90%' },
        { icon: BarChart3, text: 'ROI Positivo', metric: '300%' },
        { icon: TrendingUp, text: 'Crescimento Mensal', metric: '25%' },
        { icon: Cpu, text: 'Otimização IA', metric: '85%' }
      ],
      metrics: {
        efficiency: 90,
        cost: 40,
        time: 70,
        satisfaction: 94
      },
      examples: [
        'Campanha que gerou ROI de 400% em 3 meses',
        'Estratégia que reduziu custo por lead em 60%',
        'Funil completo com 15% de conversão final'
      ],
      color: 'from-red-400 to-red-600'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 8000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, services.length]);

  // Animate metrics when service changes
  useEffect(() => {
    const currentService = services[activeService];
    let step = 0;
    const steps = 60;
    const duration = 1500;
    const interval = duration / steps;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedMetrics({
        efficiency: Math.floor(currentService.metrics.efficiency * progress),
        cost: Math.floor(currentService.metrics.cost * progress),
        time: Math.floor(currentService.metrics.time * progress),
        satisfaction: Math.floor(currentService.metrics.satisfaction * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedMetrics(currentService.metrics);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeService]);

  const currentService = services[activeService];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Soluções Que <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Transformam</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Descubra como cada um dos nossos serviços pode revolucionar seu negócio 
            com tecnologia de ponta e resultados comprovados.
          </p>
          
          <div className="flex justify-center items-center space-x-4 text-gray-400">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm">{isAutoPlaying ? 'Pausar' : 'Reproduzir'}</span>
            </button>
            <span className="text-sm">Apresentação interativa</span>
          </div>
        </div>
      </section>

      {/* Interactive Service Showcase */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveService(index);
                  setIsAutoPlaying(false);
                }}
                className={`group flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  activeService === index
                    ? 'border-yellow-400 bg-yellow-400/10'
                    : 'border-gray-700 hover:border-yellow-400/50'
                }`}
              >
                <service.icon className={`w-6 h-6 ${
                  activeService === index ? 'text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
                }`} />
                <span className={`font-semibold ${
                  activeService === index ? 'text-yellow-400' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Main Service Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Service Info */}
            <div className="space-y-8">
              <div>
                <div className={`w-20 h-20 bg-gradient-to-br ${currentService.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <currentService.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {currentService.title}
                </h2>
                <p className="text-2xl text-yellow-400 font-semibold mb-6">
                  {currentService.subtitle}
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {currentService.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-xl border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <benefit.icon className={`w-6 h-6 bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`} />
                      <span className="text-white font-semibold text-sm">{benefit.text}</span>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                      {benefit.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => openWhatsAppWithLead(`Olá! Tenho interesse em ${currentService.title.toLowerCase()}. Gostaria de saber mais detalhes sobre como vocês podem ajudar meu negócio.`)}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
              >
                <span className="relative z-10">Quero Este Serviço</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
            </div>

            {/* Right Side - Animated Metrics */}
            <div className="space-y-8">
              {/* Performance Dashboard */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Resultados <span className="text-yellow-400">Comprovados</span>
                </h3>

                <div className="space-y-6">
                  {/* Efficiency Meter */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Aumento de Eficiência</span>
                      <span className="text-yellow-400 font-bold text-xl">{animatedMetrics.efficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className={`h-3 bg-gradient-to-r ${currentService.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedMetrics.efficiency}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Cost Reduction */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Redução de Custos</span>
                      <span className="text-green-400 font-bold text-xl">{animatedMetrics.cost}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedMetrics.cost}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Time Savings */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Economia de Tempo</span>
                      <span className="text-blue-400 font-bold text-xl">{animatedMetrics.time}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedMetrics.time}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Satisfaction */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">Satisfação do Cliente</span>
                      <span className="text-yellow-400 font-bold text-xl">{animatedMetrics.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3">
                      <div 
                        className="h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedMetrics.satisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Examples Showcase */}
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  Casos de Sucesso
                </h4>
                <div className="space-y-4">
                  {currentService.examples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-300">
              Processo transparente e eficiente do primeiro contato à entrega
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Análise Profunda', 
                  desc: 'Entendemos seu negócio, objetivos e desafios atuais',
                  icon: Target
                },
                { 
                  step: '02', 
                  title: 'Estratégia Personalizada', 
                  desc: 'Criamos um plano sob medida para suas necessidades',
                  icon: Brain
                },
                { 
                  step: '03', 
                  title: 'Desenvolvimento', 
                  desc: 'Executamos com excelência e atualizações constantes',
                  icon: Code
                },
                { 
                  step: '04', 
                  title: 'Entrega & Suporte', 
                  desc: 'Lançamos e acompanhamos os resultados',
                  icon: Rocket
                }
              ].map((item, index) => (
                <div key={index} className="text-center group relative">
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/60 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="text-yellow-400 font-bold text-lg mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Calcule Seu <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">ROI</span>
            </h2>
            <p className="text-xl text-gray-300">
              Veja o potencial de retorno dos nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-green-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aumento de Vendas</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">+40%</div>
              <p className="text-gray-300">Média de crescimento dos nossos clientes</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-blue-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Economia de Tempo</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">15h</div>
              <p className="text-gray-300">Horas economizadas por semana</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-yellow-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ROI Médio</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <p className="text-gray-300">Retorno sobre investimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologias <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Avançadas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Utilizamos as ferramentas mais modernas do mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
              { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
              { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
              { name: 'Apps Script', logo: 'https://www.gstatic.com/images/branding/product/1x/apps_script_48dp.png' },
              { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
              { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
              { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
              { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/60 to-black/60 p-6 rounded-xl border border-gray-700/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300 p-2">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto Para <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Transformar</span> Seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vamos conversar sobre qual solução é perfeita para impulsionar seus resultados
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => openWhatsAppWithLead('Olá! Vi a apresentação dos serviços da KV Group e gostaria de discutir qual solução seria ideal para meu negócio.')}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
            >
              <span className="relative z-10">Falar com Especialista</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
            
            <button 
              onClick={() => {
                navigate('/contato');
              }}
              className="inline-flex items-center px-10 py-5 border-2 border-yellow-400 text-yellow-400 font-bold text-xl rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Ver Mais Detalhes
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span>Consultoria gratuita</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span>Proposta personalizada</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span>Suporte dedicado</span>
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
    </div>
  );
};

export default Services;