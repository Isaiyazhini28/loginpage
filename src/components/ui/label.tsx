// components/ui/Label.tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {
  children: React.ReactNode; 
  required?: boolean; 
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { className, children, required, ...rest } = props;

  return (
    <LabelPrimitive.Root
      {...rest}
      ref={ref}
      className={cn(labelVariants(), className)}
    >
      {children} {required && <span className="text-red-600">*</span>}
    </LabelPrimitive.Root>
  );
});

Label.displayName = "Label";

export { Label };
