import React from "react";
import Terminal from "./components/Terminal";
import MatrixRain from "./components/MatrixRain";
import ContractAddress from "./components/ContractAddress";
import "./index.css";

export default function App() {
  return (
    <div className="w-screen h-screen crt">
      {/* Slabija kiša: opacity 0.10–0.15 je ugodno, na mobile manje gustoće */}
      <MatrixRain opacity={0.08} fontSize={12} color="#7CFF7C" />
      
      {/* Contract Address - gore desno */}
      <ContractAddress />

      <div className="h-full flex flex-col">
        <header className="px-2 sm:px-4 pt-2 pb-2 text-[10px] sm:text-[12px] opacity-70 flex justify-between items-center min-h-[50px] sm:min-h-[60px]">
          <span className="pr-2 leading-tight">
            <span className="hidden sm:inline">RUGSCHECK 3000 — World's most unreliable rug detector (meme only)</span>
            <span className="sm:hidden">RUGSCHECK 3000<br/>Meme rug detector</span>
          </span>
        </header>
        <main className="flex-1 px-2 sm:px-4 pb-2 sm:pb-4">
          <Terminal />
        </main>
        <footer className="px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-[11px] opacity-60">
          <span className="hidden sm:inline">No financial advice. No transactions. Just vibes. Type /help.</span>
          <span className="sm:hidden">No financial advice. Type /help.</span>
        </footer>
      </div>
    </div>
  );
}
