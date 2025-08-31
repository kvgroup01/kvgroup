import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const currentVideoRef = useRef(0);

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (!video1 || !video2) return;

    // Initialize videos
    video1.muted = true;
    video2.muted = true;
    video1.playsInline = true;
    video2.playsInline = true;
    video1.preload = 'auto';
    video2.preload = 'auto';
    
    // Load videos immediately
    video1.load();
    video2.load();

    // Start with first video
    video1.style.opacity = '1';
    video2.style.opacity = '0';
    
    const playVideo = async (video: HTMLVideoElement) => {
      try {
        video.currentTime = 0;
        // Add small delay to prevent play() interruption after currentTime change
        setTimeout(async () => {
          await video.play();
        }, 10);
      } catch (error) {
        console.error('Error playing video:', error);
      }
    };

    const switchVideo = () => {
      const currentVideo = currentVideoRef.current === 0 ? video1 : video2;
      const nextVideo = currentVideoRef.current === 0 ? video2 : video1;

      // Fade out current video
      currentVideo.style.opacity = '0';
      
      // Switch to next video after fade
      setTimeout(() => {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        
        // Fade in next video
        nextVideo.style.opacity = '1';
        playVideo(nextVideo);
        
        // Update current video index
        currentVideoRef.current = currentVideoRef.current === 0 ? 1 : 0;
      }, 500);
    };

    // Add event listeners
    video1.addEventListener('ended', switchVideo);
    video2.addEventListener('ended', switchVideo);

    // Start first video
    playVideo(video1);

    // Cleanup
    return () => {
      video1.removeEventListener('ended', switchVideo);
      video2.removeEventListener('ended', switchVideo);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={video1Ref}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-0 transition-opacity duration-1000 pointer-events-none"
          src="https://anvvxwzleoficczqncwe.supabase.co/storage/v1/object/public/kvgroup-site-animations/cyberspace1.mp4"
          playsInline
          muted
          preload="metadata"
        />
        <video
          ref={video2Ref}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-0 transition-opacity duration-1000 pointer-events-none"
          src="https://anvvxwzleoficczqncwe.supabase.co/storage/v1/object/public/kvgroup-site-animations/cyberspace3.mp4"
          playsInline
          muted
          preload="metadata"
        />
      </div>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        {/* Logo Principal */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-white">KV</span>
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text ml-2">
              Group
            </span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
          Transformando Ideias em
          <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text font-semibold">
            Soluções
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Sua parceira estratégica para inovação digital. Desenvolvemos soluções personalizadas 
          que impulsionam seu negócio para o próximo nível.
        </p>

        {/* CTA Principal */}
        <button 
          onClick={() => navigate('/servicos')}
          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50"
        >
          <span className="relative z-10">Começar Agora</span>
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
        </button>
      </div>

    </section>
  );
};

export default HeroSection;