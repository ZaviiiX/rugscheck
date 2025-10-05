import React, { useState } from "react";

export default function ContractAddress() {
  // Pravi CA address
  const contractAddress = "G4BMBhSrfxQFj3Z28aAknCG8fGLeEq2GejosCyg2FfgE";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="absolute top-2 right-2 sm:right-4 z-10">
      <div className="
        border border-green-700/40 
        bg-black/80 
        p-1.5 sm:p-2 
        font-mono text-xs 
        text-[color:var(--term-fg)]
        backdrop-blur-sm
        min-w-[280px] sm:min-w-[330px]
        max-w-[calc(100vw-16px)] sm:max-w-none
      ">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
            <span className="text-[color:var(--term-dim)] text-xs sm:text-sm">CA:</span>
            <span className="font-mono text-[8px] sm:text-[10px] opacity-80 break-all flex-1">
              {contractAddress}
            </span>
          </div>
          
          <button
            onClick={handleCopy}
            className="
              copy-btn-glow
              border border-green-700/60 
              bg-transparent 
              px-1.5 py-0.5 sm:px-2 sm:py-1 
              text-[8px] sm:text-[10px] 
              text-[color:var(--term-dim)]
              hover:text-[color:var(--term-fg)]
              hover:border-green-500/80
              hover:bg-green-500/5
              hover:shadow-[0_0_4px_rgba(102,255,102,0.3)]
              transition-all duration-200
              font-mono
              active:scale-95
              whitespace-nowrap
            "
            title="Copy contract address"
          >
            {copied ? "✓" : "COPY"}
          </button>
        </div>
        
        {copied && (
          <div className="
            mt-1 
            text-[7px] sm:text-[9px] 
            text-green-400 
            opacity-80
            animate-pulse
          ">
            Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
}