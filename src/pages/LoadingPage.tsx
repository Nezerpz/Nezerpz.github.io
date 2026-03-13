interface LoadingProps {
  loadingText?: string;
}

export default function LoadingPage({ loadingText = 'Loading...' }: LoadingProps) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-slate-400">{loadingText}</div>
    </div>
  );
}
