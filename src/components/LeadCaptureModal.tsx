import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { X, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface LeadFormInputs {
  name: string;
  email: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappMessage: string;
  whatsappNumber: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  whatsappMessage,
  whatsappNumber
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LeadFormInputs>();

  const onSubmit: SubmitHandler<LeadFormInputs> = async (data) => {
    setIsSubmitting(true);

    try {
      // Disparar evento do Meta Pixel como Lead
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'WhatsApp Contact',
          content_category: 'Contact Form',
          value: 1,
          currency: 'BRL'
        });
      }

      // Criar mensagem personalizada com os dados do lead
      const personalizedMessage = `📩 Nova mensagem via site KV Group

👤 Nome: ${data.name}
📧 E-mail: ${data.email}

${whatsappMessage}`;

      const encodedMessage = encodeURIComponent(personalizedMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      setSubmitSuccess(true);
      reset();

      // Redirecionar para WhatsApp após breve delay
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        onClose();
      }, 1500);

    } catch (error) {
      console.error('Error submitting lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-yellow-500/30 w-full max-w-md relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Quase lá! 🚀
          </h3>
          <p className="text-gray-300">
            Precisamos apenas de algumas informações para personalizar seu atendimento
          </p>
        </div>

        {/* Success State */}
        {submitSuccess && (
          <div className="p-8">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Perfeito!</h3>
              <p className="text-gray-300 mb-4">
                Redirecionando para o WhatsApp...
              </p>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full animate-pulse w-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        {!submitSuccess && (
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 pt-0">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className={`w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-yellow-500/20 focus:border-yellow-400/60'
                  } focus:outline-none`}
                  placeholder="Seu nome"
                  {...register('name', { required: 'Nome é obrigatório' })}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className={`w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg border transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-yellow-500/20 focus:border-yellow-400/60'
                  } focus:outline-none`}
                  placeholder="seu@email.com"
                  {...register('email', {
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'E-mail inválido'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Enviando...' : 'Continuar para WhatsApp'}
                </span>
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>

              <p className="text-gray-400 text-center text-xs">
                Seus dados são seguros e não serão compartilhados
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;