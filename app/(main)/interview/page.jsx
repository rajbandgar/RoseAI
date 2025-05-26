import { getAssessments } from "@/actions/interview";
import StatsCard from "./_components/StatsCard";
import PerformanceChart from "./_components/PerformanceChart";
import QuizList from "./_components/QuizList";


const page = async () => {

    const assessmentss = await getAssessments();
  return (
    <div className='py-20'>
      <div>
        <h1 className='text-6xl font-bold gradient-title'>Interview Preparation</h1>
        <div className="space-y-10 ">

        <StatsCard  assessmentss={assessmentss} />
        <PerformanceChart  assessmentss={assessmentss} />
        <QuizList assessmentss={assessmentss} />
        </div>
           
      </div>
    </div>
  )
}

export default page
