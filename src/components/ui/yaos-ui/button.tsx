import { mergeProps } from "@base-ui/react";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

    const buttonVariants = cva(
    "p-4 flex items-center justify-center rounded-md text-sm font-medium shadow-xl ring ring-ring/10",
  {
    variants: {
      variant: {
        default: "bg-primary text-background shadow-md hover:shadow-lg transition-all duration-500",
        destructive: "bg-destructive shadow-md hover:shadow-lg shadow-destructive/20 text-white hover:shadow-destructive/40 transition-all duration-500",
        outline: "ring ring-ring/50",
        secondary: "bg-secondary text-primary shadow-md hover:shadow-lg transition-all duration-500",
        ghost: "bg-transparent hover:bg-accent/10 shadow-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

function Button(props: ButtonProps) {
  const MergedProps = mergeProps(props, {
    className: cn(
      buttonVariants({
        variant: props.variant,
        size: props.size,
        className: props.className,
      })
    ),
  });

  const element = useRender({
    defaultTagName: "button",
    render: props.render,
    props: MergedProps,
  });

  return element;
}

export default Button;
