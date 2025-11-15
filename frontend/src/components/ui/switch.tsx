import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "./utils";

export function Switch({  ...props }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-switch-background inline-flex h-[1.15rem] w-8 items-center rounded-full transition-all disabled:opacity-50"
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "bg-card block size-4 rounded-full transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  );
}
