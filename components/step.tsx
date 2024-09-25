import { ArrowLeft } from 'lucide-react';
import { Button } from './core';
import { useRouter } from 'next/navigation';

export const Step = () => {
  const appRouter = useRouter();

  const backButton = () => {
    appRouter.back();
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
            1
          </div>
          <span className="font-semibold text-blue-600">
            Planes y coberturas
          </span>
          <div className="border-b border-gray-300 w-16 mx-2"></div>
          <div className="bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
            2
          </div>
          <span className="text-gray-600">Resumen</span>
        </div>
        <Button onClick={backButton} variant="ghost" className="text-blue-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver
        </Button>
      </div>
    </div>
  );
};
