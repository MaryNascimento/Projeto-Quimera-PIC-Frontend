import { ExperimentsMap } from '@/constants/experiments-map';
import { ComponentType } from 'react';
import { BodyWaterLoss } from './body-water-loss';

export const EXPERIMENT_RENDERERS = {
  'body-water-loss': BodyWaterLoss,
  'glycemic-control': BodyWaterLoss,
} satisfies Record<ExperimentsMap, ComponentType>;
