export const CONTACT_SERVICES = [
  'Desarrollo web',
  'Sistemas internos',
  'Consultoría',
  'Otro',
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  service: ContactService | '';
  idea: string;
}
