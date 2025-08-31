import { useState } from 'react';

interface UseWhatsAppLeadProps {
  defaultMessage?: string;
  whatsappNumber?: string;
}

export const useWhatsAppLead = ({ 
  defaultMessage = '', 
  whatsappNumber = '5592993288939' 
}: UseWhatsAppLeadProps = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(defaultMessage);

  const openWhatsAppWithLead = (message: string = defaultMessage) => {
    setCurrentMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMessage('');
  };

  return {
    isModalOpen,
    currentMessage,
    whatsappNumber,
    openWhatsAppWithLead,
    closeModal
  };
};