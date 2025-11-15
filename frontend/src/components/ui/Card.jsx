import React from 'react';
import clsx from 'clsx';

import { cn } from "./utils"; // your cn helper

export function Card({ children, className }) {
  return (
    <div className={clsx('bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden', className)}>
      {children}
    </div>
  );
}



export function CardHeader({ className, children, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 border-b border-gray-700/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h4
      data-slot="card-title"
      className={cn("text-xl font-semibold text-white", className)}
      {...props}
    >
      {children}
    </h4>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-gray-400", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 py-4 text-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center justify-end px-6 pb-6 pt-4 border-t border-gray-700/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardAction({ className, children, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
