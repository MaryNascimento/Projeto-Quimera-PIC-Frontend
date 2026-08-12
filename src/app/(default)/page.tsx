import { ExperimentList, Header } from '@/features/home';
import { Suspense } from 'react';

export const metadata = {
  title: 'Quimera',
};

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
