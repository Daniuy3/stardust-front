import { PageContainer } from "@/components/PageContainer";
import { CourseSearcher } from "./components/CourseSearcher";
import { Courses } from "./components/Courses";

export default function Page() {
    return (
        <PageContainer>
            <div>
                <h2 className="text-lg font-bold text-purple-700">
                    Cursos
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold">
                    Conoce nuestras capacitaciones y talleres
                </h1>
                <p className="text-sm">
                    Ofrecemos una variedad de cursos diseñados para ayudarte a dominar las últimas tecnologías y metodologías en desarrollo de software. 
                </p>
            </div>

            <CourseSearcher />
            <Courses />
        </PageContainer>
    );
}