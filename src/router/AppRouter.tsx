import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';

import { ROUTES } from './routes';

const Home = lazy(() => import('@/pages/Home'));
const Projects = lazy(() => import('@/pages/Projects'));
const Contact = lazy(() => import('@/pages/Contact'));
const LoadingPage = lazy(() => import('@/pages/LoadingPage'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function AppRouter() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<LoadingPage loadingText={"Laster inn..."} />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.HOME_ALT} />} />
          <Route path={ROUTES.HOME_ALT} element={<Home />} />

          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />

          <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
