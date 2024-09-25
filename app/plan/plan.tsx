'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  Button,
  RadioGroup,
  RadioGroupItem,
  Label,
} from '@rimac/components/core';
import { Check, Home, Building2 } from 'lucide-react';
import { NavBar } from '@rimac/components/nav-bar';
import { ProtectionLight, UserLight } from '@rimac/components/icons';
import { twMerge } from 'tailwind-merge';
import { Step } from '@rimac/components/step';
import { Header } from './_components/header';
import { HomeLight, HospitalLight } from '@rimac/components/icons';

interface IPlanData {
  name: string;
  price: number;
  description: Array<string>[];
  age: number;
}

function Plan({ plans }: any) {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    'for-me'
  );

  React.useEffect(() => {}, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Step />
        <div className="max-w-4xl mx-auto">
          <Header />
          <RadioGroup
            className="grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center mb-8"
            value={selectedOption || ''}
            onValueChange={setSelectedOption}
          >
            <div className="relative w-3/4">
              <RadioGroupItem
                value="for-me"
                id="for-me"
                className="peer sr-only"
              />
              <Label
                htmlFor="for-me"
                className={twMerge(
                  'flex flex-col items-start p-6 border-2 border-gray-200 rounded-3xl cursor-pointer transition-all duration-200 hover:border-blue-400 hover:shadow-md peer-checked:border-blue-600 peer-checked:shadow-lg',
                  selectedOption === 'for-me' && 'border-slate-900'
                )}
              >
                <div className="mr-4 p-2">
                  <ProtectionLight className="h-14 w-auto mb-2" />
                </div>
                <div className="space-y-2">
                  <strong className="block text-lg">Para mí</strong>
                  <span className="text-sm text-gray-600">
                    Cotiza tu seguro de salud y agrega familiares si lo deseas.
                  </span>
                </div>
              </Label>
              {selectedOption === 'for-me' && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
            <div className="relative w-3/4">
              <RadioGroupItem
                value="for-someone"
                id="for-someone"
                className="peer sr-only"
              />
              <Label
                htmlFor="for-someone"
                className={twMerge(
                  'flex flex-col items-start p-6 border-2 border-gray-200 rounded-3xl cursor-pointer transition-all duration-200 hover:border-blue-400 hover:shadow-md peer-checked:border-blue-600 peer-checked:shadow-lg',
                  selectedOption === 'for-someone' && 'border-slate-900'
                )}
              >
                <div className="mr-4 p-2">
                  <UserLight className="h-14 w-auto mb-2" />
                </div>
                <div className="space-y-2">
                  <strong className="block text-lg">Para alguien más</strong>
                  <span className="text-sm text-gray-600">
                    Realiza una cotización para uno de tus familiares o
                    cualquier persona.
                  </span>
                </div>
              </Label>
              {selectedOption === 'for-someone' && (
                <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-1">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
          </RadioGroup>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan: IPlanData, index: number) => (
              <Card key={index} className="flex flex-col py-4">
                <CardContent className="flex-grow">
                  <div className="flex mb-4 relative">
                    <h3 className="font-bold text-2xl">{plan.name}</h3>
                    {!plan.name.includes('Clínica') ? (
                      <HomeLight className="w-auto h-12 absolute top-1 right-1" />
                    ) : (
                      <HospitalLight className="w-auto h-12 absolute top-1 right-1" />
                    )}
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-400 uppercase font-bold text-[0.7rem]">
                      Costo del plan
                    </p>
                    <span className="text-2xl font-bold">${plan.price}</span>
                    <span className="text-gray-600"> al mes</span>
                  </div>
                  <ul className="text-sm space-y-2">
                    {plan.description.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-1" />
                        <span className="">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-red-700 font-bold text-white rounded-full">
                    Seleccionar Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Plan;
