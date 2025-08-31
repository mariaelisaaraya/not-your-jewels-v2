"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-1/4 w-3 h-3 bg-white/30 pixelated"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-white/40 pixelated"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/50 pixelated"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-5 h-5 bg-white/30 pixelated"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empieza hoy. Financia tu futuro sin perder tus <span className="text-[#FFE4E1]">joyas</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Únete a cientos de estudiantes que ya están construyendo su futuro con microcréditos inteligentes
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group px-10 py-5 bg-white text-[#FF8FB1] rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 flex items-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              <span className="relative z-10">Quiero comenzar</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>

            <p className="text-white/80 text-sm">⚡ Aprobación en menos de 10 minutos</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Estudiantes activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">Tasa de graduación</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-white/80">Financiados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
