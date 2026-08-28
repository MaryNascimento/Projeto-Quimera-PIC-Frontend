import { ExperimentsMap } from '@/constants/experiments-map';
import { ExperimentRender } from '@/features/experiment';
import { Suspense } from 'react';

export interface ExperimentPageProps {
  params: Promise<{
    slug: ExperimentsMap;
    pin: string;
  }>;
}

export const metadata = {
  title: 'Experimento Queda de Água Corporal | Quimera',
};

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  return (
    <div className="mx-5 sm:mx-8">
      <Suspense fallback="loading...">
        <ExperimentRender params={params} />
      </Suspense>
    </div>
  );
}
