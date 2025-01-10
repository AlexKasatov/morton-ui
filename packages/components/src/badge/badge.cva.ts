import { cva, type VariantProps } from "cva";

export const badge = cva("badge ui-border ui-rounded-full ui-h-fit", {
  variants: {
    color: {
      neutral: [
        "ui-text-neutral-600",
        "ui-border-neutral-200",
        "ui-bg-gray-50",
      ],
      error: ["ui-text-red-500", "ui-border-red-200", "ui-bg-red-50"],
      success: ["ui-text-green-700", "ui-border-green-200", "ui-bg-green-50"],
      warning: ["ui-text-amber-700", "ui-border-amber-200", "ui-bg-amber-50"],
      brand: ["ui-text-indigo-700", "ui-border-indigo-200", "ui-bg-indigo-50"],
    },
    size: {
      sm: ["ui-text-xs", "ui-py-0.5", "ui-px-1.5"],
      md: ["ui-text-sm", "ui-py-0.5", "ui-px-2"],
      lg: ["ui-text-sm", "ui-py-1", "ui-px-2.5"],
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "sm",
  },
});

export type BadgeCvaProps = VariantProps<typeof badge>;
