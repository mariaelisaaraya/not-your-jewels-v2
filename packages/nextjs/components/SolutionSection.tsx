"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Financiamiento rápido y flexible",
      description: "Accede a microcréditos en minutos, sin complicaciones burocráticas",
    },
    {
      icon: Heart,
      title: "Pagos pequeños o tras graduarte",
      description: "Paga lo que puedas durante tus estudios o comienza después de graduarte",
    },
    {
      icon: Star,
      title: "Incentivos y becas vía Stellar",
      description: "Gana recompensas y becas automáticas por tu rendimiento académico",
    },
  ];

  return (
    <section id="solucion" className="py-20 bg-gradient-to-br from-[#00C49A] to-[#00AEEF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-white/20 pixelated"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 pixelated"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-5 h-5 bg-white/15 pixelated"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Con Not Your Jewels ningún estudiante debería <span className="text-[#FFE4E1]">perder sus joyas</span> para
            no perder su <span className="text-[#FFE4E1]">futuro</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Nuestra plataforma revoluciona el acceso a la educación superior con tecnología blockchain
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg"
                alt="Estudiante feliz recibiendo apoyo financiero"
                className="w-full rounded-2xl"
              />

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-6 h-6 bg-[#FFE4E1] pixelated"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-white/80 pixelated"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFE4E1] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Únete a la revolución educativa que está transformando vidas en toda Latinoamérica
            </p>
            <button className="px-8 py-4 bg-white text-[#00AEEF] rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE4E1] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Conoce más sobre nuestra solución</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
