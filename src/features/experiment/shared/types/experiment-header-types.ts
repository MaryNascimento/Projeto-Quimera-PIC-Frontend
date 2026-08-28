import { ExperimentTypes } from '@/types/experiment-types';
import { StaticImageData } from 'next/image';

export interface ExperimentHeaderTypes {
  data: ExperimentTypes | undefined;
  imageSrc: StaticImageData;
  imageAlt: string;
}
