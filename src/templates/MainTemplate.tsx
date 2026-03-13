import { ReactNode } from 'react';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';


export interface MainTemplateProps {
  children: ReactNode;
}


export default function MainTemplate({ children }: MainTemplateProps) {
  return(
    <div className="min-h-screen text-slate-100 flex flex-col bg-slate-900">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
