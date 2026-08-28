import { ExperimentPageProps } from '@/app/experiment/[slug]/[pin]/page';
import { EXPERIMENTS_MAP } from '@/constants/experiments-map';
import { notFound } from 'next/navigation';
import { EXPERIMENT_RENDERERS } from './experiment-renderers';

export async function ExperimentRender({ params }: ExperimentPageProps) {
  const { slug } = await params;

  if (!EXPERIMENTS_MAP.includes(slug)) return notFound();

  const Render = EXPERIMENT_RENDERERS[slug];

  return <Render />;
}
