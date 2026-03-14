import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/router/routes';

const NAV_ITEMS: { label: string; route: ROUTES }[] = [
  { label: 'Home', route: ROUTES.HOME_ALT },
  { label: 'Projects', route: ROUTES.PROJECTS },
  { label: 'Contact', route: ROUTES.CONTACT },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const desktopClass = ({ isActive }: { isActive: boolean }) => {
    const base = 'px-3 py-1 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center';
    const activeCls = isActive ? 'bg-sky-500 text-slate-900' : 'bg-slate-700/20 text-slate-200';
    const hoverCls = isActive ? '' : 'hover:bg-slate-600 hover:text-white';
    return `${base} ${activeCls} ${hoverCls}`;
  };

  const mobileClass = ({ isActive }: { isActive: boolean }) => {
    const base = 'w-full px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-start';
    const activeCls = isActive ? 'bg-sky-500 text-slate-900' : 'bg-slate-700/20 text-slate-200';
    const hoverCls = isActive ? '' : 'hover:bg-slate-600 hover:text-white';
    return `${base} ${activeCls} ${hoverCls}`;
  };

  return (
    <nav className="relative w-full sm:w-auto">
      <div className="flex items-center justify-center sm:justify-between gap-2">
        <div className="hidden sm:flex gap-2 items-center">
          {NAV_ITEMS.map((it) => (
            <NavLink key={it.route} to={it.route} className={desktopClass}>
              {it.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 bg-slate-700/20 hover:bg-slate-600"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close main menu' : 'Open main menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close main menu' : 'Open main menu'}</span>
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} sm:hidden absolute left-0 right-0 top-full mt-2 z-50`}>
        <div className="mx-auto w-full max-w-md px-2">
          <div className="flex flex-col gap-2 p-2 bg-slate-800 rounded-md">
            {NAV_ITEMS.map((it) => (
              <NavLink key={it.route} to={it.route} className={mobileClass} onClick={() => setOpen(false)}>
                {it.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
