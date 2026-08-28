import { GlassWater, FlaskConical } from 'lucide-react';
import { ExperimentsListTypes } from '../types/experiments-list-types';

export const EXPERIMENT_LIST_DATA: ExperimentsListTypes[] = [
  {
    slug: 'body-water-loss',
    title: 'Queda de Água Corporal',
    description:
      'Teste seus conhecimentos nesse caso clínico que simula os efeitos da queda de água no organismo dos animais.',
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
