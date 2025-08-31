"use client";

import React from "react";
//import Link from "next/link";
import { motion } from "framer-motion";
import { Diamond, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

//import { hardhat } from "viem/chains";
//import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//import { SwitchTheme } from "~~/components/SwitchTheme";
//import { Faucet } from "~~/components/scaffold-eth";
//import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
//import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  //const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  //const { targetNetwork } = useTargetNetwork();
  //const isLocalNetwork = targetNetwork.id === hardhat.id;

  const quickLinks = [
    "Inicio",
    "Cómo Funciona",
    "Beneficios",
    "Gamificación",
    "Testimonios",
    "Contacto",
  ];

  const legalLinks = [
    "Términos y Condiciones",
    "Política de Privacidad",
    "Política de Cookies",
    "Aviso Legal",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <>
      {/* Footer */}
      {/* <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
        <div>
          <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
            <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
              {nativeCurrencyPrice > 0 && (
                <div>
                  <div className="btn btn-primary btn-sm font-normal gap-1 cursor-auto">
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>{nativeCurrencyPrice.toFixed(2)}</span>
                  </div>
                </div>
              )}
              {isLocalNetwork && (
                <>
                  <Faucet />
                  <Link href="/blockexplorer" passHref className="btn btn-primary btn-sm font-normal gap-1">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                    <span>Block Explorer</span>
                  </Link>
                </>
              )}
            </div>
            <SwitchTheme className={`pointer-events-auto ${isLocalNetwork ? "self-end md:self-auto" : ""}`} />
          </div>
        </div>
      </div> */}

      {/* Footer Not Your Jewels */}
      <footer className="bg-[#0A0A1A] text-white relative">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Diamond className="w-8 h-8 text-[#00AEEF] pixelated group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-[#00AEEF] to-[#FF8FB1] opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#FF8FB1] bg-clip-text text-transparent">
                  Not Your Jewels
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Democratizando el acceso a la educación superior en Latinoamérica a través de
                microcréditos inteligentes basados en blockchain.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-[#00AEEF]" />
                  <span>info@notyourjewels.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-[#00AEEF]" />
                  <span>+502 1234 5678</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-[#00AEEF] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-[#00AEEF]" />
                  <span>Ciudad de Guatemala, Guatemala</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[#00AEEF]">Enlaces Rápidos</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-300 hover:text-[#FF8FB1] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-[#00AEEF]">Legal</h3>
              <div className="space-y-3">
                {legalLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-gray-300 hover:text-[#FF8FB1] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Media & Copyright */}
          <motion.div
            className="border-t border-gray-800 pt-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 mr-2">Síguenos:</span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#FF8FB1] hover:to-[#00AEEF] transition-all duration-300 group"
                      aria-label={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 Not Your Jewels</p>
                <p className="text-sm text-gray-500 mt-1">Powered by aleph</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pixel art elements */}
        <motion.div
          className="absolute bottom-4 left-4 w-2 h-2 bg-[#FF8FB1] pixelated"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 bg-[#00C49A] pixelated"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </footer>
    </>
  );
};

export default Footer;
