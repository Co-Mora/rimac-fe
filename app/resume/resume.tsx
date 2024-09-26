'use client';

import { NavBar } from '@rimac/components/nav-bar';
import { Step } from '@rimac/components/step';
import { User2 } from 'lucide-react';

export default function Resume({ user }: any) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Step step={2} />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Resumen del seguro
        </h1>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-semibold mb-4">PRECIOS CALCULADOS PARA:</h2>
          <div className="flex items-center mb-2">
            <User2 className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{user.name + ' ' + user.lastName}</p>
              <p className="text-sm text-gray-600">DNI: 45353525</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              <span className="font-semibold">Responsable de pago:</span> DNI:
              45353525
            </p>
            <p className="text-sm">
              <span className="font-semibold">Plan elegido:</span> Plan en Casa
              y Clínica
            </p>
            <p className="text-sm">
              <span className="font-semibold">Costo del plan:</span> $99 al mes
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
