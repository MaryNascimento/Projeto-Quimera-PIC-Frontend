import * as z from 'zod';

export const ExperimentAccessSchema = z.object({
  student: z.string().min(1, 'Campo obrigatório'),
  pin: z.string().length(6, 'Digite um PIN válido de 6 caracteres'),
});

export type ExperimentAccessFormData = z.infer<typeof ExperimentAccessSchema>;
