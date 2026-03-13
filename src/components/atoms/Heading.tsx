import { ReactNode } from 'react';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export default function Heading({ level = 1, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as unknown as keyof JSX.IntrinsicElements;
  return <Tag className={`text-3xl font-semibold leading-tight ${className}`}>{children}</Tag>;
}
