import React from 'react';
import clsx from 'clsx';

export function CardContent({ children, className }) {
  return (
    <div className={clsx('p-6', className)}>
      {children}
    </div>
  );
}
