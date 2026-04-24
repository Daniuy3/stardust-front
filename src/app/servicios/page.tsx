
import { Delivery } from "@/app/(home)/components/Delivery";
import { PageContainer } from "@/components/PageContainer";
import { StackedBarChart } from "@/app/(home)/components/StackedBarChart";
import { Stages } from "@/app/(home)/components/Stages";
import { Hero } from "./components/Hero";

export default function Page() {

    

    return (
        <>
        <Hero />
        <PageContainer>
            <Stages />

            <Delivery />

            <StackedBarChart />
        </PageContainer>
        </>
    );
}