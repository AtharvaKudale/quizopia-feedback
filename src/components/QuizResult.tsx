
import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  score,
  totalQuestions,
  onRetry,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedbackMessage = () => {
    if (percentage >= 80) {
      return "Excellent! You have a great understanding of the subject.";
    } else if (percentage >= 60) {
      return "Good job! You know the material well.";
    } else if (percentage >= 40) {
      return "Not bad. With a bit more study you'll improve your score.";
    } else {
      return "Keep studying! Practice makes perfect.";
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md animate-scale-in">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Quiz Completed!</h2>
      
      <div className="mb-6 text-center">
        <p className="mb-2 text-xl font-semibold">
          Your Score: {score}/{totalQuestions}
        </p>
        <Progress value={percentage} className="h-3 mb-2" />
        <p className="text-sm text-gray-600">{percentage}%</p>
      </div>
      
      <div className="p-4 mb-6 text-center bg-purple-50 rounded-lg">
        <p className="text-purple-800">{getFeedbackMessage()}</p>
      </div>
      
      <Button onClick={onRetry} className="w-full">
        Try Again
      </Button>
    </div>
  );
};

export default QuizResult;
