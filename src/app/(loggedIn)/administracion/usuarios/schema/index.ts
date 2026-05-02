import * as yup from 'yup';

export const createUserSchema = yup.object().shape({
	first_name: yup.string().required('El nombre es obligatorio'),
	last_name: yup.string().required('El apellido es obligatorio'),
	email: yup.string().email('El correo no tiene un formato válido').required('El correo es obligatorio'),
	password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
	password_confirmation: yup.string().oneOf([yup.ref('password')], 'Las contraseñas deben coincidir').required('La confirmación de contraseña es obligatoria'),
	roles: yup.array().of(yup.string().oneOf(['admin', 'teacher', 'student'])).min(1, 'Debe asignar al menos un rol').required('Los roles son obligatorios'),
	
	phone: yup.string().notRequired(),
	bio: yup.string().notRequired(),
	country: yup.string().notRequired(),
	city: yup.string().notRequired(),
	birth_date: yup.date().notRequired(),
	headline: yup.string().notRequired(),
	professional_title: yup.string().notRequired(),
	specialization: yup.string().notRequired(),
	years_experience: yup.number().typeError('Los años de experiencia deben ser un número').min(0, 'Los años de experiencia no pueden ser negativos').notRequired(),
	website_url: yup.string().notRequired(),
	linkedin_url: yup.string().notRequired(),
});