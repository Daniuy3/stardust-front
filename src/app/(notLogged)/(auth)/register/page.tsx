
import { RegisterForm } from "./components/RegisterForm";



export default function Page() {
    return (
        <div 
            className="lg:absolute lg:top-2 lg:bottom-2 lg:left-3/5 lg:right-5 bg-white p-5 py-12 md:p-10 md:rounded-xl shadow-lg"
        >
            <RegisterForm />
        </div>
    );
}