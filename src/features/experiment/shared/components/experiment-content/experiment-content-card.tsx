import ReactMarkdown from 'react-markdown';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ExperimentContentTypes } from '../../types/experiment-content-types';
import { EXPERIMENT_CONTENT_ICONS } from '../../constants/experiment-content-icons';

interface ExperimentContentProps {
  content: ExperimentContentTypes;
}

export function ExperimentContentCard({ content }: ExperimentContentProps) {
  const Icon = EXPERIMENT_CONTENT_ICONS[content.id];

  return (
    <Card className="p-3 text-sm sm:p-5 sm:text-base">
      <CardHeader className="border-border border-b pl-0">
        <CardTitle className="mt-2 ml-0 flex items-center gap-3">
          <div className="bg-primary/50 rounded-full p-1">
            <Icon className="h-5 w-5" />
          </div>
          {content.title}
        </CardTitle>
      </CardHeader>
      <ReactMarkdown>{content.markdown}</ReactMarkdown>
    </Card>
  );
}
