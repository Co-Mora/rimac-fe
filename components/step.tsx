import { ArrowLeft } from 'lucide-react';
import { Button } from './core';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const Step = ({ step }: { step: number }) => {
  const appRouter = useRouter();

  const backButton = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user');
    }
    appRouter.back();
  };

  return (
    <div className="mb-12 px-28">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div
            className={twMerge(
              'bg-gray-200 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2',
              step === 1 && 'bg-blue-600'
            )}
          >
            1
          </div>
          <span
            className={twMerge('font-semibold', step === 1 && 'text-blue-600')}
          >
            Planes y coberturas
          </span>
          <div className="border-b border-gray-300 w-16 mx-2"></div>
          <div
            className={twMerge(
              'bg-gray-200 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2',
              step === 2 && 'bg-blue-600'
            )}
          >
            2
          </div>
          <span
            className={twMerge(
              'font-semibold text-gray-600',
              step === 2 && 'text-blue-600'
            )}
          >
            Resumen
          </span>
        </div>
        <Button onClick={backButton} variant="ghost" className="text-blue-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver
        </Button>
      </div>
    </div>
  );
};
