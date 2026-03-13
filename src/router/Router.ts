import { ROUTES } from './routes';

type RouteCallback = (route: ROUTES) => void;

export class Router {
  private current: ROUTES;
  private listeners: RouteCallback[] = [];

  constructor() {
    const path = window.location.pathname || '/';
    this.current = this.parsePath(path);
    window.addEventListener('popstate', this.onPopState);
  }

  private parsePath(pathname: string): ROUTES {
    let path = pathname || '/';
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    const allowed = Object.values(ROUTES) as string[];
    return (allowed.includes(path) ? (path as ROUTES) : ROUTES.HOME) as ROUTES;
  }

  private onPopState = () => {
    this.current = this.parsePath(window.location.pathname);
    this.listeners.forEach((cb) => cb(this.current));
  };

  navigate(route: ROUTES) {
    if (this.current === route) return;
    window.history.pushState({}, '', route);
    this.current = route;
    this.listeners.forEach((cb) => cb(this.current));
  }

  getCurrent(): ROUTES {
    return this.current;
  }

  onRouteChange(cb: RouteCallback): () => void {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((f) => f !== cb);
    };
  }

  destroy() {
    window.removeEventListener('popstate', this.onPopState);
    this.listeners = [];
  }
}
