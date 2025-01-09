import { forwardRef, type HTMLAttributes} from "react";
import { Slot } from "@radix-ui/react-slot";
import { badge, type BadgeCvaProps } from "./badge.cva.ts";

interface BadgeProps extends HTMLAttributes<Omit<HTMLSpanElement, 'color'> >, BadgeCvaProps {
  color?: Exclude<BadgeCvaProps['color'], null>;
  asChild?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { children, color, size, asChild = false, ...restProps } = props;
  const classNames = badge({color, size});
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={classNames}
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  )
});

Badge.displayName = "MortonUi.Badge"