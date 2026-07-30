import { ExperimentAccessForm } from '@/features/experiment-access/components/experiment-access-form';
import { Suspense } from 'react';

export const metadata = {
  title: 'Acessar Experimento | Quimera',
};

export default function ExperimentForm() {
  return (
    <main>
      <Suspense fallback="Loading experiment form...">
        <ExperimentAccessForm />
      </Suspense>
    </main>
  );
}
