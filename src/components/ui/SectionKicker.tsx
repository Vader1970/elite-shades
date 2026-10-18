export function SectionKicker({
  label,
  index,
  tone = "light",
  indexClassName,
}: {
  label: string;
  index: string;
  tone?: "light" | "dark";
  indexClassName?: string;
}) {
  const indexColor =
    indexClassName ?? (tone === "dark" ? "text-[#8E9696]" : "text-muted");

  return (
    <div
      className={`flex items-center justify-between gap-4 border-t-2 pt-4 font-heading text-xs font-semibold tracking-[0.14em] uppercase ${
        tone === "dark" ? "border-white text-white" : "border-black text-black"
      }`}
    >
      <span>{label}</span>
      <span className={indexColor}>{index}</span>
    </div>
  );
}
