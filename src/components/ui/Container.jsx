import { cn } from "@/lib/utils";

/**
 * The single page-width wrapper used across the site.
 * 1200px wide with a 16px phone gutter, as on vamiq.app.
 */
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
