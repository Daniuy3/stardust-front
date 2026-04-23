import { Benefits } from "@/components/Benefits";
import { Courses } from "@/components/Courses";
import { Delivery } from "@/components/Delivery";
import { MainHero } from "@/components/MainHero";
import { Presentation } from "@/components/Presentation";
import { StackedBarChart } from "@/components/StackedBarChart";
import { CoursesIntroduction } from "../components/CoursesIntroduction";
import { Stages } from "@/components/Stages";

export default function Page() {

  
  return (
    <div className="w-full md:max-w-6xl mx-auto md:w-11/12">
      <MainHero />

      <Presentation />

      <StackedBarChart />

      <Stages />

      <Benefits />

      <Delivery />
      <CoursesIntroduction />
      <Courses />
    </div>
  );
}