import React, { useEffect, useRef, useState } from "react";
import { handleCommand, getBanner } from "../engine/rugEngine";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Terminal() {
  const [theme, setTheme] = useLocalStorage("rc-theme", "hacker");
  const [history, setHistory] = useLocalStorage("rc-history", []); // [{in, out}]
  const [input, setInput] = useState("");
  const [booted, setBooted] = useLocalStorage("rc-booted", false);
  const scrollRef = useRef(null);

  // autoscroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // prikaži banner samo prvi put
  useEffect(() => {
    if (!booted && history.length === 0) {
      setHistory([
        { in: "", out: getBanner() },
        { in: "", out: 'Type /help to get started.' }
      ]);
      setBooted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    if (cmd === "clear" || cmd === "/clear") {
      setHistory([
        { in: "", out: getBanner() },
        { in: "", out: 'Type /help to get started.' }
      ]);
      setInput("");
      return;
    }

    if (cmd.startsWith("theme ") || cmd.startsWith("/theme ")) {
      const t = cmd.split(" ")[1];
      setTheme(t);
      setHistory((h) => [
        ...h,
        { in: cmd, out: `Theme set to '${t}' (but we stay green 😎)` },
      ]);
      setInput("");
      return;
    }

    const out = await handleCommand(cmd, { theme, setTheme, setHistory });
    setHistory((h) => [...h, { in: cmd, out }]);
    setInput("");
  };

  return (
    <div
      className="
        h-full w-full
        border border-green-700/40
        p-1 sm:p-2 md:p-3
        font-mono text-xs sm:text-sm md:text-base
        bg-transparent text-[color:var(--term-fg)]
      "
    >
      <div
        className="
          h-[75vh] sm:h-[70vh] md:h-[78vh]
          overflow-y-auto
          pr-1 sm:pr-2
        "
        id="terminal-scroll"
      >
        {history.map((row, i) => (
          <div key={i} className="mb-2">
            {row.in ? (
              <div className="flex">
                <span className="text-[color:var(--term-dim)] pr-2">$</span>
                <span className="whitespace-pre-wrap">{row.in}</span>
              </div>
            ) : null}
            <div className="pl-6 whitespace-pre-wrap opacity-95">{row.out}</div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Prompt */}
      <form onSubmit={onSubmit} className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2">
        <span className="text-[color:var(--term-dim)] text-xs sm:text-sm">$</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type "/help" to start'
          className="flex-1 bg-transparent outline-none placeholder:opacity-50 text-xs sm:text-sm"
        />
        <span className="w-1.5 sm:w-2 h-4 sm:h-5 inline-block bg-[color:var(--term-fg)] animate-pulse"></span>
      </form>
    </div>
  );
}
