import { ComponentType } from 'react';
import { BodyWaterLoss } from './body-water-loss';
import { ExperimentPageProps } from '@/app/experiment/[slug]/[pin]/page';

type ExperimentComponent = ComponentType;

const experiments = {
  'body-water-loss': BodyWaterLoss,
  'glycemic-control': BodyWaterLoss,
} satisfies Record<string, ExperimentComponent>;

type ExperimentSlug = keyof typeof experiments;

export async function ExperimentRender({ params }: ExperimentPageProps) {
  const { slug } = await params;

  const Render = experiments[slug as ExperimentSlug];

  return <Render />;
}
