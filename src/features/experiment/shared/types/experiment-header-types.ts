import { StaticImageData } from 'next/image';

export interface ExperimentHeaderTypes {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}
