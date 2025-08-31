"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Diamond, Menu, X } from "lucide-react";

// ✅ Importación agregada

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Inicio", "Cómo Funciona", "Beneficios", "Gamificación", "Contacto"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A1A]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-[#00AEEF]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative transform transition-all duration-300 group-hover:scale-110">
              <Diamond className="w-9 h-9 text-[#00AEEF] pixelated transition-all duration-300 group-hover:text-white group-hover:rotate-12" />
              <div className="absolute inset-0 w-9 h-9 bg-gradient-to-br from-[#00AEEF] via-[#00C49A] to-[#FF8FB1] opacity-20 blur-sm animate-pulse"></div>
              <div className="absolute inset-0 w-9 h-9 bg-gradient-to-br from-[#00AEEF] to-[#FF8FB1] opacity-0 group-hover:opacity-60 blur-lg transition-all duration-300"></div>
              <div className="absolute inset-0 w-9 h-9 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#00AEEF] via-[#00C49A] to-[#FF8FB1] bg-clip-text text-transparent transition-all duration-300 group-hover:from-white group-hover:to-white tracking-tight">
              Not Your Jewels
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-white/60 hover:text-white transition-all duration-300 font-medium text-sm tracking-wider group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00AEEF] to-[#00C49A] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 blur-sm transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="flex items-center space-x-4">
              <ConnectButton.Custom>
                {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
                  const ready = mounted;
                  const connected = ready && account && chain;

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <button
                              onClick={openConnectModal}
                              className="relative px-6 py-2.5 bg-gradient-to-r from-[#00AEEF] via-[#00C49A] to-[#00AEEF] text-white rounded-full font-semibold text-sm tracking-wide overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#00AEEF]/30 transform hover:scale-105"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8FB1] via-[#00AEEF] to-[#00C49A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                              <span className="relative z-10">Conectar Wallet</span>
                            </button>
                          );
                        }

                        if (chain.unsupported) {
                          return (
                            <button
                              onClick={openChainModal}
                              className="px-6 py-2.5 bg-red-500 text-white rounded-full font-semibold text-sm"
                            >
                              Red incorrecta
                            </button>
                          );
                        }

                        return (
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={openChainModal}
                              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 999,
                                    overflow: "hidden",
                                    marginRight: 8,
                                    display: "inline-block",
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <Image
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      width={16}
                                      height={16}
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "999px",
                                        overflow: "hidden",
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button>

                            <button
                              onClick={openAccountModal}
                              className="px-6 py-2.5 bg-gradient-to-r from-[#00AEEF] to-[#00C49A] text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#00AEEF]/25 transition-all duration-300"
                            >
                              {account.displayName}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>

              <button className="relative px-8 py-3 bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] text-white rounded-full font-semibold text-sm tracking-wide overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8FB1]/30 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] via-[#00C49A] to-[#FF8FB1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                <span className="relative z-10">Comenzar ahora</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/70 hover:text-white transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0A0A1A]/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <ConnectButton />
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#FF8FB1] to-[#00AEEF] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF8FB1]/25 transition-all duration-300">
                Comenzar ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
