import { ExperimentList, Header } from '@/features/home';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback="Loading experiments...">
        <ExperimentList />
      </Suspense>
    </>
  );
}
