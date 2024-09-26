'use client';
import * as React from 'react';
import { Footer } from '@rimac/components/footer';
import { InsuranceForm } from '@rimac/components/insurance-form';
import { NavBar } from '@rimac/components/nav-bar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@rimac/hooks/use-local-storage';
import { IUserForm } from '@rimac/types';

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = useLocalStorage('user', '');

  const appRouter = useRouter();
  const handleSignInForm = React.useCallback(
    (data: Required<IUserForm>, reset: () => unknown) => {
      setValue({
        ...value,
        cellphone: data.cellphone,
        documentId: data.documentId,
      });
      setLoading(true);
      setTimeout(() => {
        reset();
        appRouter.push('/plan');
        setLoading(false);
      }, 500);
    },
    [appRouter, setValue, value]
  );

  return (
    <div className="h-screen bg-gray-50">
      <Image
        src="/molecule-blur-asset.png"
        width={432}
        height={656}
        alt="molecule-blur"
        className="absolute bottom-10 left-0"
      />
      <Image
        src="/blur-asset.png"
        width={432}
        height={656}
        alt="molecule-blur"
        className="absolute top-0 right-0"
      />
      <NavBar />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-x-16 items-center justify-center">
        <div className="md:w-7/12">
          <Image
            src="/hero.png"
            width={1296}
            height={640}
            alt="Family photo"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <div className="relative inline-flex rounded-md bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] py-1 px-4 border border-transparent text-center text-sm text-slate-900 font-bold transition-all ">
            Seguro Salud Flexible
          </div>
          <h2 className="text-[2rem] font-bold mb-4 max-w-sm">
            Creado para ti y tu familia
          </h2>
          <p className="font-semibold mb-4 max-w-sm">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </p>
          <InsuranceForm onSubmit={handleSignInForm} nextLoading={loading} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
