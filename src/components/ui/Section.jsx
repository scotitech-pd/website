import { cn } from "@/lib/utils";
import Container from "./Container";

const surfaces = {
  base: "bg-surface",
  muted: "bg-surface-muted",
  sunken: "bg-surface-sunken",
  ink: "bg-ink text-on-ink",
};

const spacings = {
  none: "",
  sm: "py-10 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

/**
 * A page section with consistent vertical rhythm and surface background.
 * Pass `id` for anchor-nav targets; `contained={false}` to opt out of Container.
 */
export default function Section({
  id,
  surface = "base",
  spacing = "md",
  contained = true,
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full", surfaces[surface], spacings[spacing], className)}
      {...props}
    >
      {contained ? (
        <Container className={cn("relative z-10", containerClassName)}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
