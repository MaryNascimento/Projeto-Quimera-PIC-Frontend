import { cn } from '@/lib/utils';
import { ExperimentContentTypes } from '../../types/experiment-content-types';

interface ExperimentContentStepProps {
  content: ExperimentContentTypes;
  isActive: boolean;
  onChangeStep: () => void;
}

export function ExperimentContentStep({
  content,
  isActive,
  onChangeStep,
}: ExperimentContentStepProps) {
  return (
    <button onClick={onChangeStep} className="flex items-center gap-3">
      <div
        className={cn(
          'border-border flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xl',
          isActive && 'border-primary'
        )}
      >
        {content.id}
      </div>
      <div className="text-start text-sm">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    </button>
  );
}
