import { ExperimentAccessCard } from '@/features/experiment-access/components/experiment-access-card';
import { Suspense } from 'react';

export const metadata = {
  title: 'Acessar Experimento | Quimera',
};

export default function ExperimentForm() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Suspense fallback="Loading experiment form...">
        <ExperimentAccessCard />
      </Suspense>
    </main>
  );
}
