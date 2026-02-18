export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-8">
      {children}
    </h2>
  );
}