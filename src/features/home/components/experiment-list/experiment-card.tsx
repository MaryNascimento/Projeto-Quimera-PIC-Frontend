'use client';

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExperimentTypes } from '../../types/experiment-types';
import { Button } from '@/components/ui/button';
import { EXPERIMENT_ICONS } from '../../constants/experiment-icons';

interface ExperimentCardProps {
  experiment: ExperimentTypes;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const Icon = EXPERIMENT_ICONS[experiment.id];

  return (
    <Card className="w-full max-w-md px-4 py-8">
      <CardHeader className="text-center">
        <div className="border-border mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border">
          <Icon className="h-8 w-8" strokeWidth={1.4} />
        </div>

        <CardTitle>{experiment.title}</CardTitle>
        <CardDescription className="max-[500px]:text-justify sm:h-16">
          {experiment.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <CardAction className="mx-auto">
          <Button
            variant="default"
            className="cursor-pointer px-4"
            onClick={() => {
              window.open(`experiments/${experiment.slug}`, '_blank');
            }}
          >
            Iniciar Experimento
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
