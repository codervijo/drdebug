// src/lib/faq.ts
//
// Single source of truth for the homepage FAQ. Consumed by BOTH:
//   - src/components/LandingPage.tsx  (renders the visible FAQ section)
//   - src/pages/index.astro           (emits matching FAQPage JSON-LD)
// Keeping one array means the structured data always mirrors the visible
// copy, which is what Google's FAQPage guidelines require. Edit here only.

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What is Doctor Debug?",
    a: "Doctor Debug watches your no-code AI agents on tools like Lindy, Relay, n8n, Make, and Zapier. When an agent fails, it explains what went wrong in plain English and gives you the exact steps to fix it — no logs and no developer translation required.",
  },
  {
    q: "Why did my automation stop working?",
    a: "Most no-code agents fail for a small set of repeatable reasons: an expired connection or token, a missing or renamed field, a rate limit, or a change in a connected app. Doctor Debug identifies which one hit your run and points you to the specific step to change.",
  },
  {
    q: "What do I need to change to fix a broken agent?",
    a: "Instead of a raw error code, Doctor Debug gives you the concrete fix — for example, reconnect Google Sheets and re-run from step 4. You get a short, numbered set of steps you can act on without opening a support ticket.",
  },
  {
    q: "Do I need a developer to use it?",
    a: "No. Doctor Debug is built for marketers, operators, consultants, and teams who own the workflow but not the code. Every explanation is written for non-technical users, so you don't have to wait on an engineer to get unstuck.",
  },
  {
    q: "Which no-code platforms does Doctor Debug support?",
    a: "It is designed for the major no-code AI agent and automation tools: Lindy, Relay, n8n, Make, and Zapier. Our growing library of error fixes documents real, verified failures from these platforms.",
  },
  {
    q: "Is Doctor Debug available yet?",
    a: "Doctor Debug is pre-launch. You can join the waitlist now to get early access and help shape the plain-English repair layer for no-code AI agents ahead of our first pilot.",
  },
];
