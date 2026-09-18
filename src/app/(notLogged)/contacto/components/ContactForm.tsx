'use client';

import { FiArrowRight, FiLock } from 'react-icons/fi';

import { useContactForm } from '../hooks/useContactForm';
import { CONTACT_SERVICES } from '../interfaces';

const baseControlClassName =
  'min-h-12 w-full rounded-lg border bg-white px-4 py-2.5 text-base text-[#17134f] outline-none transition placeholder:text-gray-400 focus:border-purple-600 focus:ring-4 focus:ring-purple-100';

const getControlClassName = (hasError: boolean) =>
  `${baseControlClassName} ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
      : 'border-gray-300'
  }`;

interface FieldErrorProps {
  id: string;
  message?: string;
}

const FieldError = ({ id, message }: FieldErrorProps) => {
  if (!message) return null;

  return (
    <p id={id} className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  );
};

export const ContactForm = () => {
  const { formik } = useContactForm();

  const nameError = formik.touched.name ? formik.errors.name : undefined;
  const emailError = formik.touched.email ? formik.errors.email : undefined;
  const companyError = formik.touched.company
    ? formik.errors.company
    : undefined;
  const serviceError = formik.touched.service
    ? formik.errors.service
    : undefined;
  const ideaError = formik.touched.idea ? formik.errors.idea : undefined;

  return (
    <section
      aria-labelledby="contact-form-title"
      className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-300/50 sm:p-8"
    >
      <h2
        id="contact-form-title"
        className="mb-5 text-2xl font-bold text-[#17134f] sm:text-3xl"
      >
        Cuéntanos sobre tu proyecto
      </h2>

      <form className="space-y-5" onSubmit={formik.handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-base font-medium text-[#17134f]"
            >
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              maxLength={80}
              placeholder="Tu nombre"
              required
              aria-invalid={Boolean(nameError)}
              aria-describedby={nameError ? 'contact-name-error' : undefined}
              className={getControlClassName(Boolean(nameError))}
              {...formik.getFieldProps('name')}
            />
            <FieldError id="contact-name-error" message={nameError} />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-base font-medium text-[#17134f]"
            >
              Correo electrónico
            </label>
            <input
              id="contact-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              placeholder="tu@correo.com"
              required
              aria-invalid={Boolean(emailError)}
              aria-describedby={emailError ? 'contact-email-error' : undefined}
              className={getControlClassName(Boolean(emailError))}
              {...formik.getFieldProps('email')}
            />
            <FieldError id="contact-email-error" message={emailError} />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="mb-2 block text-base font-medium text-[#17134f]"
          >
            Empresa (opcional)
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            maxLength={120}
            placeholder="Nombre de tu empresa"
            aria-invalid={Boolean(companyError)}
            aria-describedby={companyError ? 'contact-company-error' : undefined}
            className={getControlClassName(Boolean(companyError))}
            {...formik.getFieldProps('company')}
          />
          <FieldError id="contact-company-error" message={companyError} />
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="mb-2 block text-base font-medium text-[#17134f]"
          >
            ¿En qué podemos ayudarte?
          </label>
          <select
            id="contact-service"
            required
            aria-invalid={Boolean(serviceError)}
            aria-describedby={serviceError ? 'contact-service-error' : undefined}
            className={getControlClassName(Boolean(serviceError))}
            {...formik.getFieldProps('service')}
          >
            <option value="">Selecciona una opción</option>
            {CONTACT_SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError id="contact-service-error" message={serviceError} />
        </div>

        <div>
          <label
            htmlFor="contact-idea"
            className="mb-2 block text-base font-medium text-[#17134f]"
          >
            Cuéntanos un poco sobre tu idea
          </label>
          <textarea
            id="contact-idea"
            rows={4}
            maxLength={1000}
            placeholder="Objetivo, problema que quieres resolver o funciones que necesitas..."
            required
            aria-invalid={Boolean(ideaError)}
            aria-describedby={ideaError ? 'contact-idea-error' : undefined}
            className={`${getControlClassName(Boolean(ideaError))} min-h-30 resize-y`}
            {...formik.getFieldProps('idea')}
          />
          <FieldError id="contact-idea-error" message={ideaError} />
        </div>

        <button
          data-umami-event="Click en enviar mensaje de contacto"
          type="submit"
          disabled={formik.isSubmitting}
          className="flex min-h-14 w-full cursor-pointer items-center justify-center gap-4 rounded-lg bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-6 py-3 text-base font-bold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
        >
          Enviar mensaje
          <FiArrowRight aria-hidden="true" className="text-xl" />
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-sm text-gray-500">
          <FiLock aria-hidden="true" className="shrink-0" />
          Usaremos tus datos únicamente para responderte.
        </p>
      </form>
    </section>
  );
};
