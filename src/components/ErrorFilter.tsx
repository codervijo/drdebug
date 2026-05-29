import { useMemo, useState } from "react";
import { Search } from "lucide-react";

export interface ErrorItem {
  platform: string;
  platformLabel: string;
  slug: string;
  errorMessage: string;
  plainLanguageMeaning: string;
  url: string;
}

interface PlatformTab {
  key: string; // "all" or a platform key
  label: string;
  count: number;
}

// Client-side search + platform filter for the /fix/ index. The full error
// list is passed in as a build-time prop (no fetch / no backend); filtering is
// pure client state. Results stay grouped by platform.
export default function ErrorFilter({
  items,
  tabs,
}: {
  items: ErrorItem[];
  tabs: PlatformTab[];
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((it) => {
      if (active !== "all" && it.platform !== active) return false;
      if (!q) return true;
      return (
        it.errorMessage.toLowerCase().includes(q) ||
        it.plainLanguageMeaning.toLowerCase().includes(q) ||
        it.platformLabel.toLowerCase().includes(q)
      );
    });
  }, [items, query, active]);

  // Group filtered results by platform label, preserving input order.
  const groups = useMemo(() => {
    const map = new Map<string, ErrorItem[]>();
    for (const it of filtered) {
      const arr = map.get(it.platformLabel) ?? [];
      arr.push(it);
      map.set(it.platformLabel, arr);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Platform filter tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by platform">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className={
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition " +
                  (isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground")
                }
              >
                {t.label}
                <span
                  className={
                    "rounded-full px-1.5 text-xs " +
                    (isActive ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground")
                  }
                >
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search errors…"
            aria-label="Search errors"
            className="h-11 w-full rounded-xl border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Results */}
      {groups.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center text-sm text-muted-foreground">
          No errors match “{query}”.
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {groups.map(([label, list]) => (
            <section key={label}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {label}
                <span className="ml-2 font-normal normal-case">
                  ({list.length})
                </span>
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {list.map((it) => (
                  <li key={it.url}>
                    <a
                      href={it.url}
                      className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
                    >
                      <span className="break-words font-mono text-sm font-medium text-foreground">
                        {it.errorMessage}
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {it.plainLanguageMeaning}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
