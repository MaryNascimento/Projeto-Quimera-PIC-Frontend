import { ExperimentTypes } from '@/types/experiment-types';
import { FlaskConical, GlassWater } from 'lucide-react';

export const EXPERIMENTS_LIST_DATA: ExperimentTypes[] = [
  {
    slug: 'body-water-loss',
    title: 'Queda de Água Corporal',
    description:
      'Explore como a perda de água afeta o organismo dos animais e entenda os mecanismos fisiológicos envolvidos na manutenção do equilíbrio hídrico.',
    Icon: GlassWater,
  },
  {
    slug: 'glycemic-control',
    title: 'Controle Glicêmico',
    description:
      'Analise uma série de casos clínicos sobre o controle glicêmico em animais e veja o quanto você domina o assunto. ',
    Icon: FlaskConical,
  },
];
