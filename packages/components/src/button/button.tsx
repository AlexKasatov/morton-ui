import {
  type ButtonHTMLAttributes,
  type ReactElement,
  forwardRef,
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { button, type ButtonCvaProps } from "./button.cva.ts";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonCvaProps {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  disabled?: boolean;
  color?: Exclude<ButtonCvaProps["color"], null>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      children,
      disabled = false,
      isLoading = false,
      iconRight,
      iconButtonSize,
      iconLeft,
      color,
      size,
      ...restProps
    } = props;
    const classNames = button({ color, size, iconButtonSize });
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={classNames}
        disabled={Boolean(disabled || isLoading)}
        ref={ref}
        type="button"
        {...restProps}
      >
        <Slot>{iconLeft}</Slot>
        <Slottable>
          {children}
        </Slottable>
        <Slot>{iconRight}</Slot>
      </Component>
    );
  },
);

Button.displayName = "MortonUi.Button";
