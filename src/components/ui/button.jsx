import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 rounded-full font-karla font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				// Solid brand — primary action
				default:
					'bg-brand text-brand-contrast shadow-soft hover:bg-brand-strong hover:-translate-y-0.5 hover:shadow-card',
				// Solid dark — high-contrast on light surfaces
				ink: 'bg-ink text-on-ink hover:bg-ink-soft hover:-translate-y-0.5',
				// Outline — secondary
				outline:
					'border border-hairline-strong bg-surface text-strong hover:border-brand hover:text-brand',
				// Ghost — tertiary
				ghost: 'text-strong hover:bg-surface-sunken',
				// On the dark inverse surface
				onInk: 'bg-white/10 text-on-ink ring-1 ring-white/15 backdrop-blur hover:bg-white/15',
				onInkSolid: 'bg-white text-ink hover:bg-slate-100 hover:-translate-y-0.5',
				// Inline text link
				link: 'text-brand-strong underline-offset-4 hover:underline rounded-none px-0',
			},
			size: {
				default: 'h-11 px-6 text-sm',
				sm: 'h-9 px-4 text-sm',
				lg: 'h-12 px-7 text-[15px]',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
