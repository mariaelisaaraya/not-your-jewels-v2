"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CTASection from "../components/CTASection";
import GamificationSection from "../components/GamificationSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
// Importa tus componentes de Not Your Jewels
import Navbar from "../components/Navbar";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

//import Footer from "../components/Footer";

const Home = () => {
  const { address: connectedAddress } = useAccount();
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setShowApp(!!connectedAddress);
  }, [connectedAddress]);

  return (
    <>
      {showApp ? (
        <div className="flex items-center flex-col grow pt-10">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-2xl mb-2">Welcome to</span>
              <span className="block text-4xl font-bold">Not Your Jewels</span>
            </h1>
            <div className="flex justify-center items-center space-x-2 flex-col">
              <p className="my-2 font-medium">Connected Address:</p>
              <Address address={connectedAddress} />
            </div>

            <p className="text-center text-lg mt-4">Access your educational microcredits and start learning</p>
          </div>

          <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
            <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center max-w-xs rounded-3xl sm:px-10 sm:py-10">
                <BugAntIcon className="h-8 w-8 fill-secondary" />
                <p className="mt-2">
                  Manage your credits in the{" "}
                  <Link href="/debug" passHref className="link">
                    Dashboard
                  </Link>{" "}
                  tab.
                </p>
              </div>
              <div className="flex flex-col bg-base-100 px-6 py-8 text-center items-center max-w-xs rounded-3xl sm:px-10 sm:py-10">
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p className="mt-2">
                  Explore your transactions in the{" "}
                  <Link href="/blockexplorer" passHref className="link">
                    Block Explorer
                  </Link>{" "}
                  tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-[#0A0A1A] text-white">
          <Navbar />
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <GamificationSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <CTASection />
        </div>
      )}
    </>
  );
};

export default Home;
