"use client";

import React from 'react';
import { FileText, TrendingUp, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Solicita tu microcrédito',
      description: 'Completa una solicitud simple y recibe aprobación en minutos',
      color: '#FF8FB1'
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Mejora tu rendimiento académico',
      description: 'Estudia, participa y destaca en tus clases para ganar puntos',
      color: '#00AEEF'
    },
    {
      number: '03',
      icon: Coins,
      title: 'Recibe incentivos y paga fácilmente',
      description: 'Gana recompensas por tu progreso y paga con flexibilidad',
      color: '#00C49A'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] bg-clip-text text-transparent">
              Cómo funciona
            </span>{' '}
            nuestra plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tres pasos simples para transformar tu educación y tu futuro financiero
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative group h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 text-white rounded-full flex items-center justify-center text-lg font-bold pixelated mb-4">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" 
                    style={{ backgroundColor: `${step.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: step.color }} />
                  </motion.div>
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center flex-1">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF8FB1]/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            <span className="relative z-10">Comenzar ahora</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;