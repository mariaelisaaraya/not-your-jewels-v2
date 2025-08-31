"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users } from "lucide-react";

const ProblemSection = () => {
  const countries = [
    { name: "Guatemala", percentage: 57, color: "#FF8FB1" },
    { name: "Honduras", percentage: 53, color: "#00AEEF" },
    { name: "Bolivia", percentage: 16, color: "#00C49A" },
  ];

  const stats = [
    { icon: Users, value: "2.3M+", label: "Estudiantes afectados", color: "#FF8FB1" },
    { icon: TrendingDown, value: "57%", label: "Tasa de abandono máxima", color: "#00AEEF" },
    { icon: AlertTriangle, value: "$8.5B", label: "Pérdida económica anual", color: "#00C49A" },
  ];

  return (
    <section
      id="problema"
      className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#FF8FB1] pixelated"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-[#00AEEF] pixelated"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#00C49A] pixelated"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Un problema que{" "}
            <span className="bg-gradient-to-r from-[#FF8FB1] via-[#00AEEF] to-[#00C49A] bg-clip-text text-transparent">
              no podemos ignorar
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Latinoamérica, el abandono universitario por razones financieras alcanza cifras alarmantes
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="space-y-12 mb-16">
          {/* Bar Chart Horizontal */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
              <TrendingDown className="w-7 h-7 text-[#FF8FB1] mr-3" />
              Tasas de Abandono Universitario
            </h3>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  className="flex-1 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">{country.name}</span>
                    <span className="text-2xl font-bold" style={{ color: country.color }}>
                      {country.percentage}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-5 w-full overflow-hidden">
                    <motion.div
                      className="h-5 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${country.color}, ${country.color}80)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${country.percentage}%` }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-400">
              <p className="text-sm text-gray-700 font-medium">
                <strong>Causa principal:</strong> Falta de acceso a financiamiento educativo flexible
              </p>
            </div>
          </motion.div>

          {/* Statistics Cards in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-center">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#FF8FB1]/10 via-[#00AEEF]/10 to-[#00C49A]/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-6">
              <strong className="text-[#FF8FB1]">Millones de estudiantes</strong> abandonan sus sueños cada año por
              falta de opciones financieras accesibles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Es hora de cambiar esta realidad con soluciones innovadoras que protejan tanto el futuro educativo como el
              patrimonio familiar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
