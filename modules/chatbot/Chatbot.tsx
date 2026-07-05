"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import type { SiteConfig } from "@/lib/types";
import { Button } from "@/components/ui/button";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

type ChatbotProps = {
  site: SiteConfig;
};

const quickPrompts = [
  "What services do you offer?",
  "How long does a project take?",
  "How can I contact your team?",
];

function buildReply(input: string, site: SiteConfig): string {
  const text = input.toLowerCase();

  if (text.includes("service") || text.includes("offer")) {
    return "We design and build AI systems, custom software, and mobile apps. Share your idea and we can suggest the right scope.";
  }

  if (text.includes("price") || text.includes("cost") || text.includes("budget")) {
    return "Project pricing depends on scope, timeline, and integrations. If you share your goals, we can provide an estimate range.";
  }

  if (text.includes("time") || text.includes("timeline") || text.includes("long")) {
    return "Most projects start with a discovery phase, then design and implementation sprints. A focused MVP is usually delivered in a few weeks.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("call")) {
    return `You can reach us at ${site.email}. If you prefer, use the contact form on this page and we will reply soon.`;
  }

  if (text.includes("where") || text.includes("location") || text.includes("based")) {
    return `We are based in ${site.location} and work with clients remotely as well.`;
  }

  if (text.includes("team") || text.includes("founder") || text.includes("people")) {
    return "We are a compact senior team focused on shipping high-quality products quickly and clearly.";
  }

  return "Thanks for the message. Tell me what you want to build, your timeline, and your budget range, and I can suggest next steps.";
}

export function Chatbot({ site }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: `Hi! I am the ${site.name} assistant. Ask me about services, timelines, or how to get started.`,
    },
  ]);

  function appendMessage(role: Message["role"], text: string) {
    setMessages((current) => [...current, { id: current.length + 1, role, text }]);
  }

  function submitMessage(raw: string) {
    const value = raw.trim();
    if (!value) return;

    appendMessage("user", value);
    appendMessage("assistant", buildReply(value, site));
    setDraft("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitMessage(draft);
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {isOpen ? (
        <section
          className="pointer-events-auto mb-3 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-2xl"
          aria-label="Chat assistant"
        >
          <header className="flex items-center justify-between border-b border-ink/10 bg-ink px-4 py-3 text-paper">
            <p className="font-heading text-sm font-semibold">Chat with {site.name}</p>
            <Button
              type="button"
              size="icon-sm"
              variant="ghost"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="text-paper hover:bg-paper/15 hover:text-paper"
            >
              <X className="size-4" />
            </Button>
          </header>

          <div className="max-h-72 space-y-3 overflow-y-auto bg-gradient-to-b from-paper to-paper/80 px-3 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-signal text-primary-foreground"
                      : "bg-ink/5 text-ink"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-ink/10 px-3 py-2">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => submitMessage(prompt)}
                  className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-xs text-ink transition hover:border-signal/40 hover:text-signal"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <label htmlFor="chatbot-input" className="sr-only">
                Ask a question
              </label>
              <input
                id="chatbot-input"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about your project..."
                className="h-9 w-full rounded-full border border-ink/15 bg-white px-3 text-sm text-ink placeholder:text-ink/55"
              />
              <Button type="submit" size="icon-sm" aria-label="Send message">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </section>
      ) : null}

      <Button
        type="button"
        size="icon-lg"
        className="pointer-events-auto relative rounded-full shadow-lg"
        aria-expanded={isOpen}
        aria-label="Open chat assistant"
        onClick={() => setIsOpen((value) => !value)}
      >
        {!isOpen ? (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-signal/25" />
            <MessageCircle className="relative size-5" />
          </>
        ) : (
          <X className="size-5" />
        )}
      </Button>
    </div>
  );
}
