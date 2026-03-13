import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/router/routes';

const NAV_ITEMS: { label: string; route: ROUTES }[] = [
  { label: 'Home', route: ROUTES.HOME },
  { label: 'Projects', route: ROUTES.PROJECTS },
  { label: 'Contact', route: ROUTES.CONTACT },
];

export default function Nav() {
  return (
    <nav className="flex gap-2 items-center">
      {NAV_ITEMS.map((it) => (
        <NavLink
          key={it.route}
          to={it.route}
          className={({ isActive }) => {
            const base = 'px-3 py-1 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center';
            const activeCls = isActive ? 'bg-sky-500 text-slate-900' : 'bg-slate-700/20 text-slate-200';
            const hoverCls = isActive ? '' : 'hover:bg-slate-600 hover:text-white';
            return `${base} ${activeCls} ${hoverCls}`;
          }}
        >
          {it.label}
        </NavLink>
      ))}
    </nav>
  );
}
