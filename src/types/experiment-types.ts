import { ExperimentsMap } from '@/constants/experiments-map';
import { LucideIcon } from 'lucide-react';

export interface ExperimentTypes {
  slug: ExperimentsMap;
  title: string;
  description: string;
  Icon: LucideIcon;
}
