import { cva, type VariantProps } from "cva";

export const button = cva("button ui-text-sm ui-rounded focus:ui-outline-none focus:ui-ring-4 ui-inline-flex ui-items-center ui-gap-1", {
  variants: {
    color: {
      primary: ["ui-bg-indigo-700", "ui-text-white", "hover:ui-bg-indigo-800", "focus:ui-bg-indigo-800"],
      secondary: ["ui-bg-white", "ui-text-neutral-900", "ui-drop-shadow", "ui-fill-neutral-950", "ui-border-[0.5px]", "hover:ui-border", "ui-border-neutral-200", "hover:ui-bg-neutral-50"],
      tertiary: ["ui-text-indigo-700", "hover:ui-bg-neutral-50", "hover:ui-bg-neutral-50"],
      linkColor: ["ui-text-indigo-700", "ui-fill-current", "hover:ui-text-indigo-800"],
      linkGray: ["ui-text-neutral-600", "ui-fill-current", "hover:ui-text-neutral-900"],
      destructive: ["ui-bg-red-600", "ui-text-white", "hover:ui-bg-red-700", "focus:ui-ring-red-100", "focus:ui-bg-red-700"],
    },
    size: {
      none: null,
      md: ["ui-py-2.5", "ui-px-3.5", "ui-h-10"],
      lg: ["ui-py-2.5", "ui-px-4", "ui-gap-1.5", "ui-h-11"],
      xl: ["ui-py-3", "ui-px-5", "ui-gap-1.5", "ui-h-12"],
      '2xl': ["ui-py-4", "ui-px-6", "ui-gap-2.5", "ui-h-[60px]"],
    },
    iconButtonSize: {
      none: null,
      md: "ui-p-2.5",
      lg: "ui-p-2.5",
      xl: "ui-py-3.5",
      '2xl': "ui-p-4",
    },
  },
  compoundVariants: [
    {
      color: ["primary", "secondary", "linkColor", "linkGray", "tertiary"],
      className: "focus:ui-ring-indigo-100",
    },
    {
      color: ["tertiary", "linkColor", "linkGray"],
      className: ["disabled:ui-bg-neutral-100", "disabled:ui-text-neutral-400", "disabled:ui-fill-neutral-400", "ui-drop-shadow-none", "ui-border-none"]
    },
    {
      color: ["primary", "secondary"],
      className: ["disabled:ui-bg-neutral-100", "disabled:ui-text-neutral-400", "disabled:ui-fill-neutral-400", "disabled:ui-drop-shadow-none", "disabled:ui-border-none"]
    },
    {
      color: ["primary", "destructive"],
      className: "ui-fill-white",
    },
    {
      color: ["linkColor", "tertiary"],
      className: "ui-fill-indigo-700",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "none",
    iconButtonSize: "none",
  },
});

export type ButtonCvaProps = VariantProps<typeof button>;
