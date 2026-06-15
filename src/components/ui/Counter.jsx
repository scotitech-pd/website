/**
 * Static metric value. Renders the final number at SSR/no-JS time so it is
 * never "0" for an assessor or search bot before the section scrolls into view.
 * Visual delight comes from the surrounding <Reveal> fade-in, not a count-up.
 */
export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}) {
  const numeric = typeof value === "number" ? value : Number(value);
  const formatted = Number.isFinite(numeric)
    ? numeric.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : String(value);

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
