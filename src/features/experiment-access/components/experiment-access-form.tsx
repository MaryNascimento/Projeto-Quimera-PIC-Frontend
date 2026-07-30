'use client';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ExperimentAccessFormState } from '../types/experiment-acces-form-state';
import { useActionState } from 'react';
import { ExperimentAccessAction } from '../actions/experiment-access-action';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { formatErrorMessages } from '../utils/format-error-messages';

const ExperimentAccessInitialFormState: ExperimentAccessFormState = {
  success: false,
  field_errors: undefined,
  message: undefined,
  inputs: {
    student: '',
    pin: '',
  },
};

export function ExperimentAccessForm() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  const ExperimentAccessActionBound = ExperimentAccessAction.bind(null, slug);

  const [state, formAction, isPending] = useActionState(
    ExperimentAccessActionBound,
    ExperimentAccessInitialFormState
  );

  return (
    <form action={formAction}>
      <FieldGroup>
        <Field data-invalid={!!state.field_errors?.student}>
          <FieldLabel htmlFor="student">Nome do Aluno</FieldLabel>
          <Input
            id="student"
            name="student"
            defaultValue={state.inputs?.student ?? ''}
            placeholder="Digite o seu nome"
            aria-invalid={!!state.field_errors?.student}
            disabled={isPending}
          />
          <FieldError errors={formatErrorMessages(state?.field_errors?.student)} />
        </Field>
        <Field data-invalid={!!state.field_errors?.pin}>
          <FieldLabel htmlFor="pin">PIN</FieldLabel>
          <Input
            id="pin"
            name="pin"
            defaultValue={state.inputs?.pin ?? ''}
            placeholder="Digite o PIN do experimento"
            aria-invalid={!!state.field_errors?.pin}
            disabled={isPending}
          />
          <FieldError errors={formatErrorMessages(state?.field_errors?.pin)} />
        </Field>
        <Field>
          <Button type="submit" disabled={isPending}>
            Entrar
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
