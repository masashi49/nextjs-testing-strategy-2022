import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Textbox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(function TextboxBase({ className, ...props }, ref) {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
    />
  );
});
