import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-sm transition-all hover:border-slate-700", className)}>
      {children}
    </div>
  );
}