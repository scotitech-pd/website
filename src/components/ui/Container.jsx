import { cn } from "@/lib/utils";

/**
 * The single page-width wrapper used across the site.
 * Replaces the repeated `max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20`.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-8xl px-5 min-[500px]:px-10 md:px-20",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
