import { ExperimentAccessForm } from './experiment-access-form';
import Image from 'next/image';
import LogoQuimera from '@/assets/LogoQuimera.png';

export function ExperimentAccessCard() {
  return (
    <section className="sm:border-border w-full space-y-6 p-8 sm:w-3/5 sm:rounded-xl sm:border sm:px-16 sm:shadow-md xl:w-1/3">
      <div className="flex w-full items-center justify-center">
        <Image
          src={LogoQuimera}
          alt="Logo da Plataforma Quimera"
          className="w-full max-w-76"
          priority={true}
        />
      </div>

      <p className="pb-3 text-center text-sm">
        Para iniciar o experimento informe seu nome e o código PIN fornecido pelo professor.
      </p>

      <ExperimentAccessForm />
    </section>
  );
}
