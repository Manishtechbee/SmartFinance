import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "./utils";

export function Tabs({  ...props }) {
  return <TabsPrimitive.Root className={cn("flex flex-col gap-2")} {...props} />;
}

export function TabsList({  ...props }) {
  return (
    <TabsPrimitive.List
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 items-center rounded-xl p-[3px]"
      )}
      {...props}
    />
  );
}

export function TabsTrigger({  ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "data-[state=active]:bg-card data-[state=active]:text-foreground inline-flex h-[calc(100%-1px)] items-center justify-center rounded-xl border px-2 py-1 text-sm font-medium transition disabled:opacity-50"
      )}
      {...props}
    />
  );
}

export function TabsContent({  ...props }) {
  return <TabsPrimitive.Content className={cn("flex-1")} {...props} />;
}
