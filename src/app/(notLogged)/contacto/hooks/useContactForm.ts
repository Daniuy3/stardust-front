'use client';

import { useFormik } from 'formik';

import { useSnackBarStore } from '@/hooks/useSnackbar';

import { ContactFormValues } from '../interfaces';
import { contactFormSchema } from '../schema';

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  service: '',
  idea: '',
};

export const useContactForm = () => {
  const showSnackBar = useSnackBarStore((state) => state.showSnackBar);

  const formik = useFormik<ContactFormValues>({
    initialValues,
    validationSchema: contactFormSchema,
    onSubmit: (_values, { setSubmitting }) => {
      showSnackBar(
        'La información es válida. El envío aún no está habilitado.',
        'info',
      );
      setSubmitting(false);
    },
  });

  return { formik };
};
