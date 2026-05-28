import { useState, type FormEvent } from "react";
import {
  Stethoscope,
  HelpCircle,
  Wrench,
  MessageSquareWarning,
  CheckCircle2,
  ArrowRight,
  Megaphone,
  Settings2,
  Briefcase,
  Building2,
} from "lucide-react";

function WaitlistForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-border bg-accent/60 p-4 text-left">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm text-accent-foreground">
          You're on the list. We'll send early access when Doctor Debug is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-2 sm:flex-row"
      aria-label="Join the waitlist"
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-12 flex-1 rounded-xl border border-border bg-card px-4 text-base text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        Join the waitlist
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Stethoscope className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Doctor Debug
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#how" className="transition hover:text-foreground">
            How it works
          </a>
          <a href="#example" className="transition hover:text-foreground">
            Example
          </a>
          <a href="#waitlist" className="transition hover:text-foreground">
            Waitlist
          </a>
        </nav>
        <a
          href="#waitlist"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section className="pt-16 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Pre-launch · Plain-English agent fixes</Eyebrow>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          When your AI agent breaks, get a plain-English fix.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Doctor Debug watches your no-code AI agents, catches failures, and tells you exactly what
          went wrong — no logs, no guesswork, no developer translation needed.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <WaitlistForm id="hero-email" />
          <p className="mt-3 text-sm text-muted-foreground">
            Built for marketers, operators, consultants, and teams running AI agents without
            engineers.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Works with</span>
          {["Lindy", "Relay", "n8n", "Make", "Zapier"].map((t) => (
            <span key={t} className="font-medium text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Problem() {
  const pains = [
    {
      icon: HelpCircle,
      title: "Why did it stop?",
      body: "Your agent fails halfway through, but the error does not explain what actually happened.",
    },
    {
      icon: Wrench,
      title: "What do I change?",
      body: "You know something broke, but not whether it was a connection, a missing field, a bad prompt, or a tool issue.",
    },
    {
      icon: MessageSquareWarning,
      title: "Who do I ask?",
      body: "You end up waiting on a technical teammate or support thread just to get unstuck.",
    },
  ];
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Broken agents should not require an engineer to understand.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          No-code AI tools make it easy to build powerful workflows. But when something fails, the
          error messages still sound like they were written for developers. Doctor Debug turns those
          confusing failures into clear next steps.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pains.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Example() {
  return (
    <Section id="example" className="bg-secondary/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From cryptic error to clear fix.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What you see today
          </h3>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-[oklch(0.18_0.03_255)] p-4 text-sm leading-relaxed text-[oklch(0.92_0.02_250)]">
{`HTTP 401 Unauthorized
Invalid token. Request failed at Step 4.`}
          </pre>
          <p className="mt-4 text-sm text-muted-foreground">
            Helpful if you are an engineer. Not helpful if you just need your agent working again.
          </p>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm ring-1 ring-primary/10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            What Doctor Debug tells you
          </h3>
          <p className="mt-4 text-lg font-medium text-foreground">
            Your Google Sheets connection expired.
          </p>
          <div className="mt-5">
            <p className="text-sm font-semibold text-foreground">How to fix it:</p>
            <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
              {[
                "Open your automation tool.",
                "Reconnect Google Sheets.",
                "Re-run the agent from Step 4.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Clear enough to act on without opening a support ticket.
          </p>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Connect your agent",
      body: "Doctor Debug watches your agent runs from tools like Lindy, Relay, n8n, Make, or Zapier.",
    },
    {
      title: "It spots the failure",
      body: "When something breaks, Doctor Debug looks at where it failed and what changed before the failure.",
    },
    {
      title: "You get the fix path",
      body: "Instead of a confusing error, you get a plain-English explanation and the next steps to try.",
    },
  ];
  return (
    <Section id="how">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          How Doctor Debug works
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function UseCases() {
  const cases = [
    {
      icon: Megaphone,
      title: "Marketing teams",
      body: "Fix lead routing, content workflows, CRM updates, and campaign automations faster.",
    },
    {
      icon: Settings2,
      title: "Operations teams",
      body: "Understand why handoffs, approvals, or internal processes stopped.",
    },
    {
      icon: Briefcase,
      title: "Consultants",
      body: "Support client automations without translating technical errors by hand.",
    },
    {
      icon: Building2,
      title: "Agency owners",
      body: "Reduce “why did this break?” messages from clients and teammates.",
    },
  ];
  return (
    <Section className="bg-secondary/50">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built for people who own the workflow, not the code.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SocialProof() {
  const quotes = [
    {
      q: "Exactly the kind of thing I need when a client automation breaks and I do not want to dig through logs.",
      a: "Automation consultant",
    },
    {
      q: "Our team can build agents, but troubleshooting them is where we get stuck.",
      a: "Marketing operations lead",
    },
    {
      q: "This would save us from asking engineering every time a workflow fails.",
      a: "Growth team operator",
    },
  ];
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Early users we want to learn from
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We are looking for no-code AI agent builders, automation consultants, and operations teams
          who regularly hit confusing failures.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {quotes.map((t) => (
          <figure
            key={t.a}
            className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/70 p-6"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/90">
              “{t.q}”
            </blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
              — {t.a}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section id="waitlist">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-sm sm:p-14">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Be first to try Doctor Debug.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Join the waitlist and help shape the plain-English repair layer for no-code AI agents.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <WaitlistForm id="footer-email" />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>Doctor Debug — plain-English fixes for broken AI agents.</p>
        <div className="flex items-center gap-5">
          <a href="#" className="transition hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Example />
        <HowItWorks />
        <UseCases />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
