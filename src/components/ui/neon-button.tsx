import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-white hover:text-white mx-auto text-center rounded-full cursor-pointer select-none transition-all duration-300",
    {
        variants: {
            variant: {
                // Transparent fill + deep purple border (primary)
                default: "bg-transparent border-purple-700 hover:border-purple-500 hover:bg-transparent",
                // Transparent fill + deep purple border, slightly dimmer (secondary)
                outline: "bg-transparent border-purple-800 hover:border-purple-500 hover:bg-transparent",
                ghost: "border-transparent bg-transparent hover:border-purple-700 hover:bg-black/60 text-white",
            },
            size: {
                default: "px-7 py-2",
                sm: "px-4 py-1",
                lg: "px-10 py-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Top neon glow line — purple sweep on hover */}
                <span className={cn(
                    "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent hidden",
                    neon && "block"
                )} />

                {children}

                {/* Bottom neon glow line — always faintly visible, brightens on hover */}
                <span className={cn(
                    "absolute group-hover:opacity-80 opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent hidden",
                    neon && "block"
                )} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
