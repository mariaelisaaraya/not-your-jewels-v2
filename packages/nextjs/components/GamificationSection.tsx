"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Gift, Target, Trophy } from "lucide-react";

const GamificationSection = () => {
  const achievements = [
    { icon: Trophy, name: "Primera A+", progress: 100, color: "#FFD700" },
    { icon: Target, name: "Asistencia Perfecta", progress: 85, color: "#00AEEF" },
    { icon: Gift, name: "Proyecto Destacado", progress: 60, color: "#FF8FB1" },
    { icon: Award, name: "Mentor Estudiantil", progress: 30, color: "#00C49A" },
  ];

  return (
    <section id="gamificacion" className="py-20 bg-[#003366] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-3 h-3 bg-[#00AEEF] pixelated"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-[#FF8FB1] pixelated"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#00C49A] pixelated"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-5 h-5 bg-[#FFD700] pixelated"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
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
            Mejora tu rendimiento, gana{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8FB1] bg-clip-text text-transparent">
              becas y recompensas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Convierte tu educación en una aventura emocionante con nuestro sistema de gamificación
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Progress Dashboard */}
          <motion.div
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Trophy className="w-8 h-8 text-[#FFD700] mr-3" />
              Mis Logros
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-6 h-6" style={{ color: achievement.color }} />
                        <span className="text-white font-medium">{achievement.name}</span>
                      </div>
                      <span className="text-sm text-gray-300 font-semibold">{achievement.progress}%</span>
                    </div>
                    <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-3 rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${achievement.color}, ${achievement.color}80)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${achievement.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 shimmer"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-[#00C49A]/20 to-[#00AEEF]/20 rounded-2xl border border-[#00C49A]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Próxima Recompensa</span>
                <span className="text-[#00C49A] font-bold text-lg">50 Stellar</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">Completa 2 logros más para desbloquear</p>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#FF8FB1]/20 to-[#00AEEF]/20 rounded-3xl p-8 border border-white/10">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
                alt="Estudiante exitoso usando la plataforma"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <motion.div
                className="bg-[#FFD700]/20 rounded-xl p-4 text-center border border-[#FFD700]/30 hover:bg-[#FFD700]/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Trophy className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Logros</p>
              </motion.div>
              <motion.div
                className="bg-[#FF8FB1]/20 rounded-xl p-4 text-center border border-[#FF8FB1]/30 hover:bg-[#FF8FB1]/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Gift className="w-8 h-8 text-[#FF8FB1] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Recompensas</p>
              </motion.div>
              <motion.div
                className="bg-[#00C49A]/20 rounded-xl p-4 text-center border border-[#00C49A]/30 hover:bg-[#00C49A]/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Award className="w-8 h-8 text-[#00C49A] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Becas</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
