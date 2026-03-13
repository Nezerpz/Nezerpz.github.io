import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
  return <p className={`text-slate-300 ${className}`}>{children}</p>;
}
