import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">KV</span>
              <span className="text-yellow-400 ml-1">Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando ideias em soluções digitais inovadoras. 
              Sua parceira estratégica para o sucesso no mundo digital.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Home</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Serviços</a></li>
              <li><a href="/quem-somos" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Quem Somos</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400 mr-2" />
                São Paulo, SP
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-yellow-400 mr-2" />
                (11) 99999-9999
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 mr-2" />
                contato@kvgroup.com.br
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 KV Group. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;