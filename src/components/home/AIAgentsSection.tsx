import React, { useState } from 'react';
import { Bot, MessageCircle, X, Send } from 'lucide-react';

const AIAgentsSection = () => {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  const agents = [
    {
      id: 1,
      name: 'Agente de Vendas',
      description: 'Automatize seu processo de vendas com IA',
      features: ['Qualificação de leads', 'Follow-up automatizado', 'Relatórios inteligentes']
    },
    {
      id: 2,
      name: 'Agente de Suporte',
      description: 'Atendimento 24/7 com inteligência artificial',
      features: ['Respostas instantâneas', 'Escalação inteligente', 'Base de conhecimento']
    },
    {
      id: 3,
      name: 'Agente de Marketing',
      description: 'Otimize suas campanhas com IA avançada',
      features: ['Análise de dados', 'Segmentação automática', 'ROI otimizado']
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agentes de <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">IA</span>
          </h2>
          <p className="text-xl text-gray-300">
            Revolucione sua empresa com inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
                <p className="text-gray-300 text-sm">{agent.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {agent.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveAgent(agent.id)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 rounded-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Testar Agente
              </button>
            </div>
          ))}
        </div>

        {/* Chat Widget */}
        {activeAgent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-yellow-500/30 w-full max-w-md h-96 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-yellow-500/20">
                <h3 className="text-white font-semibold">
                  {agents.find(a => a.id === activeAgent)?.name}
                </h3>
                <button
                  onClick={() => setActiveAgent(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-3 rounded-lg mb-4">
                  <p className="text-white text-sm">
                    Olá! Sou o {agents.find(a => a.id === activeAgent)?.name} da KV Group. 
                    Como posso ajudar você hoje?
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-yellow-500/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg border border-yellow-500/20 focus:border-yellow-400/50 focus:outline-none"
                  />
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-2 rounded-lg hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAgentsSection;