"use client";

import { useFormik } from "formik"
import { useSnackBarStore } from "@/hooks/useSnackbar"
import { useRouter } from 'next/navigation'
import { LoginFormValues } from "../interfaces"
import { loginSchema } from "../schema"
import { createSessionAction, loginUser } from "../api"


export const useLogin = () => {
    const { showSnackBar } = useSnackBarStore()
    const router = useRouter();

    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => handleLogin(values),
    })

    const handleLogin = async (values: LoginFormValues) => {
        try {

            const response = await loginUser(values.email, values.password);
            
            if(response.success && response.data){ 
                
                showSnackBar(response.message, "success");

                await createSessionAction(response.data.data.user, response.data.data.token);

                router.push('/home/mis-cursos');
                
                return;
            }
            
            const errorMessage = response.message || "Ocurrió un error al iniciar sesión";
            showSnackBar(errorMessage, "error");
            return;
        }
        catch (error) {
            console.error("Error in handleLogin:", error);
            showSnackBar("Ocurrió un error al iniciar sesión", "error");
        }
    }
    
    return {        
        formik,
    }
}