import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import { badge, type BadgeCvaProps } from "./badge.cva.ts";

interface BadgeProps extends HTMLAttributes<Omit<HTMLSpanElement, 'color'> >, PropsWithChildren, BadgeCvaProps {
  color?: Exclude<BadgeCvaProps['color'], null>;
}

export const Badge:FC<BadgeProps> = ({children, color, size, ...props}) => {
  return (
    <span
      className={badge({color, size})}
      {...props}
    >
      {children}
    </span>
  )
}