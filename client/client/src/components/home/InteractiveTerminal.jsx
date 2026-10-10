"use client";

import { useState } from "react";
import {
  Terminal,
  Circle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const commands = {
  help: `Available commands:

about       → About Smita
skills      → Technical skills
projects    → Featured projects
experience  → Experience
contact     → Contact information
clear       → Clear terminal`,

  about: `Smita Mittal

Full Stack Developer

Currently pursuing BCA and building modern,
responsive and scalable web applications.

Focus:

→ React.js
→ Next.js
→ Node.js
→ MongoDB`,

  skills: `Frontend:

→ HTML
→ CSS
→ JavaScript
→ React.js
→ Next.js
→ Tailwind CSS

Backend:

→ Node.js
→ Express.js
→ MongoDB
→ REST APIs
→ JWT Authentication`,

  projects: `Featured Projects:

01. AI-CRM
    Next.js • Node.js • MongoDB • JWT

02. Inventory Management System
    React • Node.js • Express • MongoDB

03. Finance Dashboard
    React • Tailwind CSS • Recharts

Type "about" or "skills" to explore more.`,

  experience: `Experience:

→ Web Development Intern
  PN Infosys

→ Web Development Intern
  CodSoft

→ Cybersecurity Intern
  Pankh Cyber Solution

Building practical experience through
real-world projects and development work.`,

  contact: `Let's build something meaningful together.

Email:
smitamittal55@gmail.com

GitHub:
github.com/smitamittal55-code`,

  clear: "",
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    {
      type: "system",
      text: `Welcome to Smita.dev Terminal 🚀

Type "help" to see available commands.`,
    },
  ]);

  const handleCommand = (event) => {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = commands[command];

    setHistory((previous) => [
      ...previous,
      {
        type: "command",
        text: `$ ${command}`,
      },
      {
        type: response ? "response" : "error",
        text:
          response ||
          `Command not found: "${command}"

Type "help" to see available commands.`,
      },
    ]);

    setInput("");
  };

  const quickCommands = [
    "help",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  const runQuickCommand = (command) => {
    const response = commands[command];

    setHistory((previous) => [
      ...previous,
      {
        type: "command",
        text: `$ ${command}`,
      },
      {
        type: "response",
        text: response,
      },
    ]);

    setInput("");
  };

  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-violet-300 shadow-lg shadow-violet-950/20">
            <Terminal size={14} />
            Interactive Terminal
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Explore my portfolio
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              from the terminal.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Curious about my skills, projects or experience?
            Run a command and explore.
          </p>
        </div>

        {/* Terminal Outer Glow */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 opacity-70 blur-[2px]" />

          {/* Terminal */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#070a12] shadow-2xl shadow-violet-950/30">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0b0e18] px-5 py-4">
              
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <Circle
                  size={11}
                  className="fill-red-400/90 text-red-400/90"
                />
                <Circle
                  size={11}
                  className="fill-yellow-400/90 text-yellow-400/90"
                />
                <Circle
                  size={11}
                  className="fill-emerald-400/90 text-emerald-400/90"
                />
              </div>

              {/* Terminal Title */}
              <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                <Terminal size={14} className="text-violet-400" />

                <span className="font-mono text-xs text-slate-400">
                  smita@portfolio
                </span>

                <span className="font-mono text-xs text-slate-600">
                  ~
                </span>
              </div>

              {/* Online Status */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                <span className="hidden text-[10px] font-medium uppercase tracking-widest text-emerald-400/80 sm:block">
                  Online
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="relative min-h-[440px] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.07),transparent_35%)] p-5 font-mono text-sm md:p-8">

              {/* Terminal Content */}
              <div className="max-h-[330px] overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                {history.map((item, index) => (
                  <div key={index} className="mb-5">
                    {item.type === "command" && (
                      <div className="flex items-center gap-2 font-medium text-cyan-300">
                        <span className="text-violet-400">$</span>
                        <span>{item.text.replace("$ ", "")}</span>
                      </div>
                    )}

                    {item.type === "system" && (
                      <pre className="whitespace-pre-wrap leading-7 text-violet-300">
                        {item.text}
                      </pre>
                    )}

                    {item.type === "response" && (
                      <pre className="whitespace-pre-wrap leading-7 text-slate-300">
                        {item.text}
                      </pre>
                    )}

                    {item.type === "error" && (
                      <pre className="whitespace-pre-wrap leading-7 text-rose-400">
                        {item.text}
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleCommand}
                className="mt-7 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/30 px-4 py-3.5 shadow-inner shadow-black/20 transition focus-within:border-violet-400/30 focus-within:bg-violet-500/[0.04]"
              >
                <span className="font-bold text-cyan-400">
                  $
                </span>

                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder='Type "help" to explore...'
                  className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-slate-600"
                  autoComplete="off"
                  spellCheck="false"
                />

                <span className="hidden rounded-md border border-white/10 px-2 py-1 text-[9px] font-medium tracking-wider text-slate-600 sm:block">
                  ENTER
                </span>
              </form>
            </div>

            {/* Terminal Bottom Bar */}
            <div className="flex items-center justify-between border-t border-white/[0.06] bg-black/20 px-5 py-3">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-600">
                <Sparkles size={12} className="text-violet-400" />
                Interactive Portfolio
              </div>

              <span className="font-mono text-[10px] text-slate-700">
                bash
              </span>
            </div>
          </div>
        </div>

        {/* Quick Commands */}
        <div className="mt-7">
          <div className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Quick Commands
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {quickCommands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => runQuickCommand(command)}
                className="group inline-flex items-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 font-mono text-xs text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-violet-300 hover:shadow-lg hover:shadow-violet-950/20"
              >
                <span className="text-slate-700 transition group-hover:text-violet-400">
                  $
                </span>

                {command}

                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
