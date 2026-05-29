import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Shared waitlist email capture. No backend — submit is client-side only and
// just flips to a confirmation state (same behavior as the landing page hero).
// `id` must be unique per instance on a page so the <label htmlFor> is valid.
export default function WaitlistForm({ id }: { id: string }) {
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
