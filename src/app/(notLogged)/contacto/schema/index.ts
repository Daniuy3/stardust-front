import * as yup from 'yup';

import { CONTACT_SERVICES, ContactFormValues } from '../interfaces';

const nonBlankText = (message: string) =>
  yup
    .string()
    .transform((value) => (typeof value === 'string' ? value.trim() : value))
    .test('not-only-whitespace', message, function () {
      const originalValue = this.originalValue;

      return (
        typeof originalValue !== 'string' ||
        originalValue.length === 0 ||
        originalValue.trim().length > 0
      );
    });

export const contactFormSchema: yup.ObjectSchema<ContactFormValues> = yup.object({
  name: nonBlankText('El nombre no puede contener solo espacios')
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'El nombre no puede exceder 80 caracteres'),
  email: nonBlankText('El correo no puede contener solo espacios')
    .required('El correo electrónico es obligatorio')
    .max(254, 'El correo no puede exceder 254 caracteres')
    .email('Ingresa un correo electrónico válido'),
  company: nonBlankText('La empresa no puede contener solo espacios').max(
    120,
    'La empresa no puede exceder 120 caracteres',
  ).default(''),
  service: yup
    .mixed<(typeof CONTACT_SERVICES)[number]>()
    .oneOf(CONTACT_SERVICES, 'Selecciona una opción válida')
    .required('Selecciona el tipo de ayuda que necesitas'),
  idea: nonBlankText('La descripción no puede contener solo espacios')
    .required('Cuéntanos un poco sobre tu idea')
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(1000, 'La descripción no puede exceder 1000 caracteres'),
});
