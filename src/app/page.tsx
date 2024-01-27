import { QuestionsCard } from "./modules/quiz/components/QuestionsCard";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-white text-center font-bold mb-4 text-xl">Quizz App</h1>
          <QuestionsCard></QuestionsCard>
        </div>
    </div>
  );
}
