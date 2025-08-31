"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tati Rodriguez",
      role: "Estudiante de Ingeniería",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      text: "Gracias a Not Your Jewels pude continuar mis estudios sin vender el anillo de mi abuela. Ahora estoy en mi último semestre y ya conseguí trabajo.",
      rating: 5,
      university: "Universidad de Guatemala",
    },
    {
      name: "Carlos Mendoza",
      role: "Estudiante de Medicina",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      text: "El sistema de gamificación me motivó a estudiar más. Las recompensas por mis notas me ayudaron a pagar parte de mi crédito automáticamente.",
      rating: 5,
      university: "Universidad Central de Honduras",
    },
    {
      name: "Ana Gutierrez",
      role: "Estudiante de Administración",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      text: "La flexibilidad de pago fue clave para mí. Pude enfocarme en mis estudios sabiendo que solo pagaría cuando tuviera ingresos estables.",
      rating: 5,
      university: "Universidad Mayor de Bolivia",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-white to-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Historias de{" "}
            <span className="bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] bg-clip-text text-transparent">éxito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estudiantes reales que cambiaron su futuro sin perder sus tesoros familiares
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#FF8FB1] to-[#00AEEF] rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">{'"' + testimonial.text + '"'}</p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-[#00AEEF] font-medium">{testimonial.university}</p>
                </div>
              </div>

              {/* Pixel art element */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#00C49A] pixelated"
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
