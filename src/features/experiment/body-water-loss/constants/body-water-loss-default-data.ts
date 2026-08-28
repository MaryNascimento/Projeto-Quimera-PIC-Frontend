import { ExperimentDefaultDataTypes } from '../../shared/types/experiment-default-data-types';
import { MakdownReadContent } from '../../shared/utils/markdown-read-content';
import DogIlustration from '../assets/DogIlustration.png';

export const BODY_WATER_LOSS_DEFAULT_DATA: ExperimentDefaultDataTypes = {
  header: {
    title: 'Queda de Água Corporal',
    description:
      'Explore como a perda de água afeta o organismo dos animais e entenda os mecanismos fisiológicos envolvidos na manutenção do equilíbrio hídrico.',
    imageSrc: DogIlustration,
    imageAlt: 'Imagem de um cão da raça golden tomando água.',
  },
  content: [
    {
      id: 1,
      title: 'Introdução',
      description:
        'Entenda o tema abordado neste experimento e como ele se relaciona com o organismo.',
      markdown: MakdownReadContent(
        'src/features/experiment/body-water-loss/content/content-introduction-bwl.md'
      ),
    },
    {
      id: 2,
      title: 'Caso Clínico',
      description: 'Estude um caso clínico real e coloque em prática os conhecimentos adquiridos.',
      markdown: '',
    },
  ],
};
