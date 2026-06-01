import { handleCallback } from "./api";
import { ErrorLogin } from "./components/ErrorLogin";
import { SuccessLogin } from "./components/SuccessLogin";

export default async function Page({
    params,
    searchParams
}: {
    params: Promise<{ provider: string }>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {

    const { provider } = await params;
    const { code, state } = await searchParams;
    
    if (!code || !state || !provider) {
        return (
            <div className="flex flex-col h-[90vh] items-center justify-center">
                <ErrorLogin 
                    message="Faltan parámetros necesarios para procesar el inicio de sesión. Por favor, intenta iniciar sesión nuevamente." 
                    provider={provider? provider as string : "el proveedor"} />
            </div>
        );
    }

    const result = await handleCallback({ code: code as string, state: state as string, provider });

    if(!result.success || !result.data) {
        return (
            <div className="flex flex-col h-[90vh] items-center justify-center">
                <ErrorLogin message={result.message} provider={provider} />
            </div>
        );
    }


    return (
        <div className="flex flex-col h-[90vh] items-center justify-center">
            <SuccessLogin provider={provider} data={result.data} />
        </div>
    );
}