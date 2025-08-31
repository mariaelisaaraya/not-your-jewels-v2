"use client";

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1A] via-[#003366]/50 to-[#0A0A1A]"></div>
        <img
          src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg"
          alt="Estudiantes universitarios"
          className="w-full h-full object-cover opacity-30"
        />
        
        {/* Floating pixel art elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-4 h-4 bg-[#FF8FB1] pixelated"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-3 h-3 bg-[#00C49A] pixelated"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-40 left-20 w-5 h-5 bg-[#00AEEF] pixelated"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
          <motion.div 
            className="absolute top-60 right-40 w-4 h-4 bg-[#FF8FB1] pixelated"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Porque la educación no debería ser un{' '}
          <span className="bg-gradient-to-r from-[#00AEEF] via-[#FF8FB1] to-[#00C49A] bg-clip-text text-transparent animate-gradient">
            privilegio
          </span>
          , es un{' '}
          <span className="bg-gradient-to-r from-[#00C49A] via-[#00AEEF] to-[#FF8FB1] bg-clip-text text-transparent animate-gradient">
            derecho
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Microcréditos estudiantiles basados en Stellar, con gamificación e incentivos
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF8FB1]/30 transition-all duration-300 transform hover:scale-105 flex items-center relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            <span className="relative z-10">Solicita tu crédito</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-[#00AEEF] text-[#00AEEF] rounded-full font-semibold text-lg hover:bg-[#00AEEF] hover:text-white transition-all duration-300 flex items-center backdrop-blur-sm">
            <Play className="mr-2 w-5 h-5" />
            Conoce más
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00AEEF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00AEEF] rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;