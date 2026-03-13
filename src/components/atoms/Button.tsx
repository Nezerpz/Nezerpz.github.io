import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 text-slate-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
