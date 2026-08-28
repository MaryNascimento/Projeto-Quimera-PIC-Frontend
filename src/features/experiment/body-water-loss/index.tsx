import { ExperimentContent } from '../shared/components/experiment-content';
import { ExperimentHeader } from '../shared/components/experiment-header';
import { BODY_WATER_LOSS_DEFAULT_DATA } from './constants/body-water-loss-default-data';

export function BodyWaterLoss() {
  const data = BODY_WATER_LOSS_DEFAULT_DATA;
  return (
    <>
      <ExperimentHeader header={data.header} />

      <ExperimentContent content={data.content} />
    </>
  );
}
