import React from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: 'João Silva',
      company: 'TechCorp',
      text: 'A KV Group transformou completamente nossa operação digital. Resultados incríveis!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'InovaBiz',
      text: 'Profissionalismo e qualidade excepcionais. Recomendo sem hesitação.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      company: 'DigitalPro',
      text: 'ROI impressionante com as soluções da KV Group. Parceria estratégica perfeita.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Dizem Nossos <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">Clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-yellow-400 mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-yellow-400 text-sm">{testimonial.company}</p>
                </div>

                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;