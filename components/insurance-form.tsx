'use client';
import React, { memo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import {
  Button,
  Input,
  Select,
  SelectValue,
  SelectContent,
  Checkbox,
  Label,
  SelectTrigger,
  SelectItem,
} from '@rimac/components/core';
import { z, type ZodType } from 'zod';
import { LoaderCircle } from 'lucide-react';
import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

export const GetQuoteFormSchema: ZodType<{
  documentId: string;
  cellphone: string;
  acceptTerm: unknown;
  acceptCommunication: unknown;
}> = z.object({
  documentId: z.string({
    required_error: 'El documento ingresado no es válido',
  }),
  cellphone: z.string({
    required_error: 'El celular ingresado no es válido',
  }),
  acceptTerm: z.string().transform((value) => value === 'on'),
  acceptCommunication: z.string().transform((value) => value === 'on'),
});

interface SignInFormProps {
  nextLoading: boolean;
  onSubmit: (
    data: z.output<Required<typeof GetQuoteFormSchema>>,
    reset: () => void
  ) => NonNullable<unknown>;
}

export const InsuranceForm: React.FC<SignInFormProps> = memo(
  ({ onSubmit, nextLoading }): React.ReactElement<HTMLFormElement> => {
    const [selectedOption, setSelectedOption] = React.useState('DNI');
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<z.output<typeof GetQuoteFormSchema>>({
      defaultValues: {
        documentId: '',
        cellphone: '',
        acceptTerm: '',
        acceptCommunication: '',
      },
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      resolver: zodResolver(GetQuoteFormSchema),
    });
    console.log('errors', errors);
    const onSubmitForm: SubmitHandler<any> = (
      data: z.infer<typeof GetQuoteFormSchema>
    ) => onSubmit(data, reset);

    return (
      <form
        id="form"
        className="space-y-4 w-5/6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex rounded-md border border-gray-200 overflow-hidden">
          <Select value={selectedOption} onValueChange={setSelectedOption}>
            <SelectTrigger className={twJoin('w-24 border-0 rounded-none')}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                { value: 'DNI', label: 'DNI' },
                { value: 'RUC', label: 'RUC' },
              ].map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="documentId"
            data-cy="documentId"
            placeholder="Nro. de documento"
            type="tel"
            className={twJoin(
              'rounded-l-none  focus-visible:ring-0',
              clsx(
                errors.documentId && 'border-red-600 focus-visible:ring-red-600'
              )
            )}
            {...register('documentId', {
              setValueAs: (value) => {
                if (value === '') return undefined;
                return value;
              },
            })}
          />
        </div>

        <ErrorMessage
          errors={errors}
          name="documentId"
          render={({ message }) => (
            <span
              data-cy="documentId"
              className="text-red-600 text-[0.8rem] font-light"
            >
              {message}
            </span>
          )}
        />
        <Input
          type="tel"
          id="cellphone"
          data-cy="cellphone"
          placeholder="Celular"
          className={clsx(
            errors.cellphone && 'border-red-600 focus-visible:ring-red-600'
          )}
          {...register('cellphone', {
            setValueAs: (value) => {
              if (value === '') return undefined;
              return value;
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="cellphone"
          render={({ message }) => (
            <span
              data-cy="cellphone"
              className="text-red-600 text-[0.8rem] font-light"
            >
              {message}
            </span>
          )}
        />

        <div className="space-x-2 flex items-center">
          <Checkbox checked={false} />
          <Label>Acepto la Política de Privacidad</Label>
        </div>
        <div className="space-x-2 flex items-center">
          <Checkbox />
          <Label>Acepto la Política Comunicaciones Comerciales</Label>
        </div>
        <Button form="form" size="lg" variant="secondary" type="submit">
          {Boolean(nextLoading) && (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          )}
          Cotiza aquí
        </Button>
      </form>
    );
  }
);
