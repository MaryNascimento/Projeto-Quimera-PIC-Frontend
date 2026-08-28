'use client';

import { useState } from 'react';
import { ExperimentContentStep } from './experiment-content-step';
import { ExperimentContentCard } from './experiment-content-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, FlaskConical } from 'lucide-react';
import { ExperimentContentTypes } from '../../types/experiment-content-types';

interface ExperimentContentProps {
  content: ExperimentContentTypes[];
}

export function ExperimentContent({ content }: ExperimentContentProps) {
  const [activeStep, setActiveStep] = useState<ExperimentContentTypes>(content[0]);

  return (
    <div className="space-y-8">
      <section>
        <ul className="flex">
          {content.map((step) => (
            <li key={step.id}>
              <ExperimentContentStep
                content={step}
                onChangeStep={() => setActiveStep(step)}
                isActive={step.id === activeStep.id}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <ExperimentContentCard content={activeStep} />

        {activeStep.id === 1 ? (
          <div className="my-8 flex justify-end">
            <Button className="cursor-pointer" onClick={() => setActiveStep(content[1])}>
              Próximo
              <ChevronRight />
            </Button>
          </div>
        ) : (
          <div className="my-8 flex justify-between">
            <Button
              className="border-border cursor-pointer border"
              onClick={() => setActiveStep(content[0])}
              variant={'outline'}
            >
              <ChevronLeft />
              Voltar
            </Button>
            <Button className="cursor-pointer">
              <FlaskConical />
              Iniciar Experimento
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
