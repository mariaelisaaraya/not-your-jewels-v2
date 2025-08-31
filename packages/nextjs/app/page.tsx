"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  // Estados para formularios
  const [studentName, setStudentName] = useState("");
  const [university, setUniversity] = useState("");
  const [academicScore, setAcademicScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [repayAmount, setRepayAmount] = useState("");
  const [activeTab, setActiveTab] = useState("student");

  // Hooks para leer contratos
  const { data: studentInfo } = useScaffoldReadContract({
    contractName: "MicroLoanPool",
    functionName: "getStudentInfo",
    args: [connectedAddress],
  });

  const { data: poolStats } = useScaffoldReadContract({
    contractName: "MicroLoanPool",
    functionName: "getPoolStats",
  });

  const { data: maxLoanAmount } = useScaffoldReadContract({
    contractName: "MicroLoanPool",
    functionName: "getMaxLoanAmount",
    args: [connectedAddress],
  });

  // Hooks para escribir contratos
  const { writeContractAsync: registerStudent } = useScaffoldWriteContract("MicroLoanPool");
  const { writeContractAsync: requestLoan } = useScaffoldWriteContract("MicroLoanPool");
  const { writeContractAsync: deposit } = useScaffoldWriteContract("MicroLoanPool");
  const { writeContractAsync: repayLoan } = useScaffoldWriteContract("MicroLoanPool");

  // Funciones del contrato
  const handleRegisterStudent = async () => {
    try {
      await registerStudent({
        functionName: "registerStudent",
        args: [studentName, university, BigInt(academicScore)],
      });
      alert("El estudiante se registró exitosamente!");
      setStudentName("");
      setUniversity("");
      setAcademicScore("");
    } catch (error) {
      console.error("Error registrando estudiante:", error);
    }
  };

  const handleRequestLoan = async () => {
    try {
      await requestLoan({
        functionName: "requestLoan",
        args: [parseEther(loanAmount)],
      });
      alert("Préstamo solicitado exitosamente!");
      setLoanAmount("");
    } catch (error) {
      console.error("Error solicitando préstamo:", error);
    }
  };

  const handleDeposit = async () => {
    try {
      await deposit({
        functionName: "deposit",
        value: parseEther(depositAmount),
      });
      alert("Depósito realizado exitosamente!");
      setDepositAmount("");
    } catch (error) {
      console.error("Error realizando depósito:", error);
    }
  };

  const handleRepayLoan = async () => {
    try {
      await repayLoan({
        functionName: "repayLoan",
        args: [BigInt(0)], // Primer préstamo
        value: parseEther(repayAmount),
      });
      alert("Pago realizado exitosamente!");
      setRepayAmount("");
    } catch (error) {
      console.error("Error realizando pago:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center text-white mb-12">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
              💎 Not Your Jewels
            </h1>
            <p className="text-xl opacity-90">Microcréditos estudiantiles descentralizados</p>
            <p className="text-sm opacity-75 mt-2">Financiamiento educativo sin empeñar tus pertenencias</p>
          </div>

          {/* Wallet Info */}
          {connectedAddress && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 text-white text-center">
              <p className="mb-2 font-medium">Wallet Conectada:</p>
              <Address address={connectedAddress} />
            </div>
          )}

          {/* Pool Stats */}
          {poolStats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center">
                <h3 className="text-sm opacity-75">Balance Total</h3>
                <p className="text-2xl font-bold">{Number(poolStats[0]) / 1e18} ETH</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center">
                <h3 className="text-sm opacity-75">Préstamos Emitidos</h3>
                <p className="text-2xl font-bold">{Number(poolStats[1]) / 1e18} ETH</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center">
                <h3 className="text-sm opacity-75">Total Estudiantes</h3>
                <p className="text-2xl font-bold">{Number(poolStats[2])}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white text-center">
                <h3 className="text-sm opacity-75">Total Inversores</h3>
                <p className="text-2xl font-bold">{Number(poolStats[3])}</p>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab("student")}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeTab === "student" ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-white/10"
                }`}
              >
                🎓 Estudiante
              </button>
              <button
                onClick={() => setActiveTab("investor")}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeTab === "investor" ? "bg-white text-purple-600 font-semibold" : "text-white hover:bg-white/10"
                }`}
              >
                💰 Inversor
              </button>
            </div>
          </div>

          {/* Student Tab */}
          {activeTab === "student" && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Portal Estudiante</h2>

                {/* Student Info */}
                {studentInfo && studentInfo[6] ? (
                  <div className="mb-8 p-4 bg-green-500/20 rounded-xl border border-green-400">
                    <h3 className="text-lg font-semibold mb-2">Tu Perfil</h3>
                    <p>Nombre: {studentInfo[0]}</p>
                    <p>Universidad: {studentInfo[1]}</p>
                    <p>Puntaje Académico: {Number(studentInfo[2])}/100</p>
                    <p>Total Prestado: {Number(studentInfo[3]) / 1e18} ETH</p>
                    <p>Total Pagado: {Number(studentInfo[4]) / 1e18} ETH</p>
                    <p>Puntaje Crediticio: {Number(studentInfo[5])}</p>
                    {maxLoanAmount && <p>Límite de Crédito: {Number(maxLoanAmount) / 1e18} ETH</p>}
                  </div>
                ) : (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Registrarse como Estudiante</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={studentName}
                        onChange={e => setStudentName(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                      />
                      <input
                        type="text"
                        placeholder="Universidad"
                        value={university}
                        onChange={e => setUniversity(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                      />
                      <input
                        type="number"
                        placeholder="Puntaje académico (0-100)"
                        value={academicScore}
                        onChange={e => setAcademicScore(e.target.value)}
                        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                        min="0"
                        max="100"
                      />
                      <button
                        onClick={handleRegisterStudent}
                        disabled={!studentName || !university || !academicScore}
                        className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-3 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                )}

                {/* Loan Actions */}
                {studentInfo && studentInfo[6] && (
                  <div className="space-y-6">
                    {/* Request Loan */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Solicitar Préstamo</h3>
                      <div className="flex gap-4">
                        <input
                          type="number"
                          step="0.01"
                          placeholder="Cantidad en ETH"
                          value={loanAmount}
                          onChange={e => setLoanAmount(e.target.value)}
                          className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                        />
                        <button
                          onClick={handleRequestLoan}
                          disabled={!loanAmount}
                          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
                        >
                          Solicitar
                        </button>
                      </div>
                    </div>

                    {/* Repay Loan */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Pagar Préstamo</h3>
                      <div className="flex gap-4">
                        <input
                          type="number"
                          step="0.01"
                          placeholder="Cantidad a pagar en ETH"
                          value={repayAmount}
                          onChange={e => setRepayAmount(e.target.value)}
                          className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                        />
                        <button
                          onClick={handleRepayLoan}
                          disabled={!repayAmount}
                          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
                        >
                          Pagar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Investor Tab */}
          {activeTab === "investor" && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Portal Inversor</h2>
                <p className="text-center mb-8 opacity-75">Invierte en el futuro de estudiantes latinoamericanos</p>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Realizar Depósito</h3>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Cantidad en ETH"
                      value={depositAmount}
                      onChange={e => setDepositAmount(e.target.value)}
                      className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50"
                    />
                    <button
                      onClick={handleDeposit}
                      disabled={!depositAmount}
                      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
                    >
                      Invertir
                    </button>
                  </div>
                  <p className="text-sm opacity-75 mt-2">
                    Tus fondos serán utilizados para microcréditos estudiantiles
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
