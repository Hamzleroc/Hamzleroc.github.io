"use client";

import { useEffect, useRef, useState } from "react";
import { allEntries, categories, type QAEntry } from "@/app/ccnp-study/data";

type Message = {
  id: string;
  role: "user" | "tutor";
  text: string;
};

const STOPWORDS = new Set([
  "the", "a", "an", "is", "are", "what", "how", "why", "does", "do", "of",
  "to", "in", "and", "or", "for", "on", "with", "explain", "tell", "me",
  "about", "can", "you", "i", "it", "this", "that",
]);

function scoreEntry(entry: QAEntry, query: string): number {
  let score = 0;
  for (const kw of entry.keywords) {
    if (query.includes(kw)) score += kw.split(" ").length * 2;
  }
  const words = query.split(/\W+/).filter((w) => w && !STOPWORDS.has(w));
  for (const w of words) {
    if (entry.question.toLowerCase().includes(w)) score += 0.5;
  }
  return score;
}

function findAnswer(rawQuery: string): QAEntry | null {
  const query = rawQuery.toLowerCase().trim();
  if (!query) return null;

  let best: QAEntry | null = null;
  let bestScore = 0;
  for (const entry of allEntries) {
    const s = scoreEntry(entry, query);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }
  return bestScore > 0 ? best : null;
}

const FALLBACK =
  "I don't have a canned answer for that one yet. Try rephrasing with a specific term (e.g. \"OSPF areas\", \"port security\", \"VXLAN\"), or tap one of the sample questions below to see what I can cover.";

const WELCOME =
  "Hi, I'm your CCNP study tutor. I answer from a built-in bank of ENCOR 350-401 explanations — no live AI calls, just fast, offline-friendly answers. Ask me about routing, switching, security, automation, and more, or tap a suggested question to get started.";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `m${idCounter}`;
}

export default function CcnpTutor() {
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId(), role: "tutor", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, thinking]);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || thinking) return;

    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: trimmed }]);
    setInput("");
    setThinking(true);

    const match = findAnswer(trimmed);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "tutor", text: match ? match.answer : FALLBACK },
      ]);
      setThinking(false);
    }, 500);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const sampleQuestions = categories.map((c) => c.entries[0]).filter(Boolean);

  return (
    <div className="bg-cream border border-beige flex flex-col h-[600px] max-h-[75vh]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] sm:max-w-[75%] ${m.role === "user" ? "order-2" : ""}`}>
              {m.role === "tutor" && (
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-amber font-semibold mb-2">
                  AI Tutor
                </p>
              )}
              <div
                className={`px-5 py-3.5 font-sans text-sm leading-7 ${
                  m.role === "user"
                    ? "bg-amber text-cream"
                    : "bg-cream-light border border-beige text-brown"
                }`}
              >
                {m.text}
              </div>
            </div>
          </div>
        ))}

        {thinking && (
          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-amber font-semibold mb-2">
                AI Tutor
              </p>
              <div className="px-5 py-3.5 bg-cream-light border border-beige inline-flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-pulse [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Sample questions */}
      {messages.length <= 1 && (
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {sampleQuestions.map((q) => (
            <button
              key={q.id}
              type="button"
              onClick={() => ask(q.question)}
              className="font-sans text-xs px-4 py-2 border border-beige text-muted hover:border-amber hover:text-amber transition-colors duration-200 cursor-pointer"
            >
              {q.question}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={onSubmit} className="border-t border-beige px-6 py-4 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about OSPF, VLANs, port security, automation…"
          className="flex-1 bg-cream border border-beige text-brown font-sans text-sm px-4 py-3 placeholder:text-muted/60 focus:outline-none focus:border-amber transition-colors duration-200"
        />
        <button
          type="submit"
          disabled={thinking || !input.trim()}
          className="font-sans text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 bg-amber text-cream hover:bg-amber-dark transition-colors duration-200 cursor-pointer disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-amber"
        >
          Ask
        </button>
      </form>
    </div>
  );
}
