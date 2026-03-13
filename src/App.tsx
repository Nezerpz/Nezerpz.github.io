
import { ErrorBoundary } from '@/components/atoms/ErrorBoundary';
import AppRouter from '@/router/AppRouter';
import MainTemplate from '@/templates/MainTemplate';

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <MainTemplate>
        <AppRouter />
      </MainTemplate>
    </ErrorBoundary>
  );
}
