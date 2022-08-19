import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea">
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea {...props} ref={ref}/>
  );
});
