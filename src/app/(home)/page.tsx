import { Benefits } from "@/app/(home)/components/Benefits";
import { Delivery } from "@/app/(home)/components/Delivery";
import { Presentation } from "@/app/(home)/components/Presentation";
import { StackedBarChart } from "@/app/(home)/components/StackedBarChart";
import { CoursesIntroduction } from "./components/CoursesIntroduction";
import { Stages } from "@/app/(home)/components/Stages";
import { MainHero } from "./components/MainHero";
import { Courses } from "./components/Courses";

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