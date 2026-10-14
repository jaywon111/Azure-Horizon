"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { faqs, rooms, dining, spa, experiences, offers, events, local } from "@/lib/data";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
};

type Intent = {
  keywords: string[];
  answer: string;
  links?: { label: string; href: string }[];
};

/* ============================================
   KNOWLEDGE BASE — every answer is a real page
   or a fact from lib/data.ts
   ============================================ */
const intents: Intent[] = [
  // ---------- Rooms & suites ----------
  {
    keywords: ["suite", "suites", "room", "rooms", "villa", "villas", "accommodation", "stay", "book", "reserve", "reservation"],
    answer:
      "We have three accommodations: the Ocean Suite (from $1,200), the Garden Villa (from $1,850), and The Cliff House (from $4,200). Every one faces the water.",
    links: [
      { label: "View Suites", href: "/rooms" },
      { label: "Reserve", href: "/book" },
    ],
  },
  {
    keywords: ["ocean suite", "ocean"],
    answer:
      "The Ocean Suite is 820 sq ft with a private balcony over the Pacific, a marble ensuite, and a hand-tuned Steinway. From $1,200 / night.",
    links: [{ label: "See the Ocean Suite", href: "/rooms/ocean-suite" }],
  },
  {
    keywords: ["garden villa", "garden", "villa"],
    answer:
      "The Garden Villa is 1,400 sq ft with a private plunge pool, outdoor shower, and a wood-burning fireplace. From $1,850 / night.",
    links: [{ label: "See the Garden Villa", href: "/rooms/garden-villa" }],
  },
  {
    keywords: ["cliff house", "cliff", "residence"],
    answer:
      "The Cliff House is our most private residence — 2,600 sq ft, two bedrooms, an infinity pool, and a dedicated house manager. From $4,200 / night.",
    links: [{ label: "See The Cliff House", href: "/rooms/cliff-house" }],
  },

  // ---------- Dining ----------
  {
    keywords: ["dining", "restaurant", "eat", "food", "menu", "dinner", "breakfast", "lunch", "tide", "salt", "listening room"],
    answer:
      "Three kitchens: Tide (chef's table, 7 courses), Salt (all-day coastal), and The Listening Room (vinyl bar). Dining is reserved for guests and members.",
    links: [
      { label: "Dining", href: "/dining" },
      { label: "Reserve a table", href: "mailto:dining@azurehorizon.com" },
    ],
  },
  {
    keywords: ["dress code", "dress", "attire", "wear"],
    answer:
      "Smart casual in all three venues. No jacket required, no beachwear at dinner. Tide is the dressiest of the three.",
  },

  // ---------- Spa ----------
  {
    keywords: ["spa", "massage", "wellness", "treatment", "facial", "sauna"],
    answer:
      "The spa is carved into the cliff, eleven metres below the property. Three rituals: Oceanic Ritual (90 min, $420), Thermal Circuit (120 min, $280), and Facial Rituals (60 min, $340).",
    links: [{ label: "Spa & Wellness", href: "/spa" }],
  },

  // ---------- Experiences ----------
  {
    keywords: ["experience", "experiences", "sail", "sailing", "hike", "hiking", "boat", "cook", "cooking"],
    answer:
      "Three signature experiences: a sunrise sail (42-ft sloop), a chef's table morning at the market, and a guided 7-mile hike through the Santa Monica Mountains. All arranged by your concierge.",
    links: [{ label: "Experiences", href: "/experiences" }],
  },

  // ---------- Offers ----------
  {
    keywords: ["offer", "offers", "package", "deal", "discount", "promotion"],
    answer:
      "Three current offers: The Quiet Escape (3 nights, from $3,400), The Chef's Journey (2 nights, from $4,200), and The Wellness Reset (5 nights, from $7,200).",
    links: [{ label: "Offers", href: "/offers" }],
  },

  // ---------- Events ----------
  {
    keywords: ["event", "events", "wedding", "weddings", "meeting", "boardroom", "private dining", "party", "gather", "terrace", "cellar"],
    answer:
      "Three spaces: The Terrace (120 seated, cliff edge), The Cellar (24 seated, in the wine cellar), and The Boardroom (18 seated). We host weddings, private dinners, and quiet meetings.",
    links: [
      { label: "Events & Weddings", href: "/events" },
      { label: "Speak with events", href: "/contact" },
    ],
  },

  // ---------- Location ----------
  {
    keywords: ["where", "location", "address", "directions", "drive", "lax", "airport", "map", "malibu"],
    answer:
      "We're at 100 Ocean Drive, Malibu, CA 90265. From LAX: I-405 N → CA-1 N (Pacific Coast Highway) → 15 miles north → right onto Ocean Drive. We're the last house on the left.",
    links: [{ label: "Contact & Map", href: "/contact" }],
  },
  {
    keywords: ["weather", "temperature", "climate", "warm", "cold"],
    answer:
      "Malibu sits around 20–24°C most of the year. Mornings can be cool and misty, afternoons are warm and clear. We recommend a light layer for evenings on the terrace.",
  },
  {
    keywords: ["beach", "beaches", "pier", "getty", "neptune", "el matador", "local", "neighborhood", "nearby"],
    answer:
      "Our neighborhood: Getty Villa (Roman antiquities, 20 min south), Malibu Pier (working pier with a perfect breakfast counter), El Matador Beach (sea stacks and coves), and Neptune's Net (roadside seafood, unchanged since 1958).",
  },

  // ---------- Policies ----------
  {
    keywords: ["pet", "pets", "dog", "dogs", "cat", "animal"],
    answer:
      "Small dogs up to 20 kg are welcome in Garden Villas and The Cliff House, with a one-time fee of $150. Please let us know at booking.",
  },
  {
    keywords: ["child", "children", "kids", "family", "families", "baby", "babies", "nanny"],
    answer:
      "We are a family-friendly house with a dedicated children's program and a private nanny service on request. Cribs and highchairs are complimentary.",
  },
  {
    keywords: ["check in", "check-in", "checkin", "check out", "check-out", "checkout", "arrival", "departure", "time"],
    answer:
      "Check-in from 15:00, check-out by 11:00. Early arrival and late departure are available on request — just note it when you book.",
  },
  {
    keywords: ["cancel", "cancellation", "refund", "policy"],
    answer:
      "Free cancellation up to 72 hours before arrival. Within 72 hours, one night is charged.",
  },
  {
    keywords: ["park", "parking", "car", "ev", "charge", "charger", "tesla"],
    answer:
      "Complimentary valet parking for all guests. Four Tesla Destination Chargers and two universal Level 2 EV chargers on site.",
  },
  {
    keywords: ["wifi", "wi-fi", "internet", "connection"],
    answer:
      "Fibre Wi-Fi throughout the property — suites, spa, dining, and grounds. No password required for guests.",
  },
  {
    keywords: ["transfer", "airport", "pickup", "helicopter", "shuttle"],
    answer:
      "Complimentary luxury sedan transfers from LAX are included for suites and villas. Helicopter transfer available on request.",
  },
  {
    keywords: ["smoke", "smoking", "vape", "vaping"],
    answer:
      "The house is entirely non-smoking, including balconies and terraces. A designated outdoor area is available near the garden path.",
  },
  {
    keywords: ["access", "accessible", "wheelchair", "disability", "ada"],
    answer:
      "The Garden Villa and The Cliff House are step-free and fully accessible. The Ocean Suite requires stairs. Full accessibility details are available on request.",
  },

  // ---------- Payment / booking ----------
  {
    keywords: ["pay", "payment", "deposit", "card", "credit", "cash"],
    answer:
      "No deposit is taken online. A member of our team confirms your reservation within 15 minutes, then sends a private booking link. All major cards accepted.",
  },
  {
    keywords: ["price", "pricing", "cost", "how much", "rate", "rates"],
    answer:
      "Rates start at $1,200 for the Ocean Suite, $1,850 for the Garden Villa, and $4,200 for The Cliff House. Rates vary by season and length of stay.",
    links: [{ label: "See all suites", href: "/rooms" }],
  },
  {
    keywords: ["availability", "available", "vacancy", "open"],
    answer:
      "For exact availability, we recommend choosing your dates on a suite page, or contacting us directly — we usually reply within 15 minutes.",
    links: [
      { label: "Check dates", href: "/rooms/ocean-suite" },
      { label: "Contact us", href: "/contact" },
    ],
  },

  // ---------- Contact ----------
  {
    keywords: ["contact", "call", "phone", "email", "reach", "speak", "human"],
    answer:
      "You can reach us at +1 555 0199 or stay@azurehorizon.com. Our concierge replies to every enquiry within 15 minutes during business hours.",
    links: [{ label: "Contact", href: "/contact" }],
  },

  // ---------- About ----------
  {
    keywords: ["about", "story", "history", "who", "founder", "owner", "house"],
    answer:
      "The Azure Horizon is a twelve-room house on a forgotten stretch of Malibu cliff. We bought the land in 2019, broke ground in 2021, and opened in 2023. Forbes Five-Star since 2026.",
    links: [{ label: "Our Story", href: "/about" }],
  },
  {
    keywords: ["review", "reviews", "rating", "star"],
    answer:
      "We hold a Forbes Five-Star rating and have been featured in Condé Nast Traveler, Monocle, and Travel + Leisure. Our guests write the best reviews — scroll the homepage to see them.",
    links: [{ label: "Read reviews", href: "/" }],
  },
];

/* ============================================
   MATCHING
   ============================================ */
function findAnswer(query: string): Intent | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  let best: { intent: Intent; score: number } | null = null;

  for (const intent of intents) {
    let score = 0;
    for (const kw of intent.keywords) {
      if (q.includes(kw)) {
        // Prefer longer keyword matches (more specific)
        score += kw.length;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { intent, score };
    }
  }

  return best?.intent || null;
}

/* ============================================
   COMPONENT
   ============================================ */
export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Good evening. I'm the Azure Horizon concierge. How can I help with your stay?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = [
    "Do you allow pets?",
    "What's the dress code?",
    "Tell me about the spa",
    "Where are you located?",
    "What are your rates?",
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const intent = findAnswer(trimmed);
      const botMsg: Message = intent
        ? { id: Date.now() + 1, role: "bot", text: intent.answer, links: intent.links }
        : {
            id: Date.now() + 1,
            role: "bot",
            text: "I'm not sure about that one. You can reach our team directly at +1 555 0199 or stay@azurehorizon.com — we reply within 15 minutes.",
            links: [{ label: "Contact us", href: "/contact" }],
          };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 650);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating bubble */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open concierge chat"
        className="concierge-bubble fixed z-[180] flex items-center justify-center rounded-full"
        style={{
          right: "1.25rem",
          bottom: "5.5rem",
          width: "56px",
          height: "56px",
          background: "var(--color-gold)",
          color: "var(--color-ink)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.25 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 5h16v12H8l-4 4V5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="11" r="1" fill="currentColor" />
              <circle cx="12" cy="11" r="1" fill="currentColor" />
              <circle cx="15" cy="11" r="1" fill="currentColor" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="concierge-panel fixed z-[180] flex flex-col"
            style={{
              right: "1.25rem",
              bottom: "8.75rem",
              width: "min(380px, calc(100vw - 2.5rem))",
              height: "min(560px, calc(100vh - 11rem))",
              background: "rgba(14,14,16,0.98)",
              border: "1px solid rgba(245,241,232,0.12)",
              borderRadius: "20px",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              className="flex-shrink-0 flex items-center gap-3 px-5 py-4"
              style={{ borderBottom: "1px solid rgba(245,241,232,0.08)" }}
            >
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(201,169,110,0.15)",
                  color: "var(--color-gold)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 5h16v12H8l-4 4V5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex-1">
                <p className="heading" style={{ fontSize: "0.9rem" }}>
                  Concierge
                </p>
                <p
                  className="text-[0.7rem] flex items-center gap-1.5"
                  style={{ color: "rgba(245,241,232,0.5)" }}
                >
                  <span
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--color-gold)" }}
                  />
                  Replies within 15 minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-2 rounded-full transition-colors duration-300 hover:bg-white/6"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 2L10 10M10 2L2 10"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-3"
                    style={{
                      background:
                        m.role === "user"
                          ? "var(--color-gold)"
                          : "var(--color-carbon)",
                      color:
                        m.role === "user"
                          ? "var(--color-ink)"
                          : "var(--color-cream)",
                      border:
                        m.role === "bot"
                          ? "1px solid rgba(245,241,232,0.08)"
                          : "none",
                      fontSize: "0.875rem",
                      lineHeight: 1.55,
                    }}
                  >
                    <p>{m.text}</p>
                    {m.links && m.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3" style={{ borderTop: "1px solid rgba(245,241,232,0.1)" }}>
                        {m.links.map((l, i) => (
                          <Link
                            key={i}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="text-[0.75rem] px-3 py-1.5 rounded-full transition-colors duration-300"
                            style={{
                              background: "rgba(201,169,110,0.12)",
                              color: "var(--color-gold)",
                              border: "1px solid rgba(201,169,110,0.25)",
                            }}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className="rounded-2xl px-4 py-3 flex items-center gap-1"
                    style={{
                      background: "var(--color-carbon)",
                      border: "1px solid rgba(245,241,232,0.08)",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="block w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--color-gold)" }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggestions — only before first user message */}
            {messages.length === 1 && (
              <div
                className="flex-shrink-0 px-5 py-3 overflow-x-auto"
                style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
              >
                <div className="flex gap-2">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => send(s)}
                      className="flex-shrink-0 text-[0.72rem] px-3 py-1.5 rounded-full transition-colors duration-300 whitespace-nowrap"
                      style={{
                        background: "transparent",
                        color: "rgba(245,241,232,0.7)",
                        border: "1px solid rgba(245,241,232,0.15)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-3"
              style={{ borderTop: "1px solid rgba(245,241,232,0.08)" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent outline-none px-3 py-2 text-sm"
                style={{
                  color: "var(--color-cream)",
                  fontSize: "0.875rem",
                }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="flex items-center justify-center rounded-full transition-opacity duration-300 disabled:opacity-30"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "var(--color-gold)",
                  color: "var(--color-ink)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 8L14 2L8 14L7 9L2 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
