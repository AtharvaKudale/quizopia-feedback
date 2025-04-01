
import React, { useState } from "react";
import { quizData } from "@/data/quizData";
import Question from "./Question";
import QuizResult from "./QuizResult";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = (answeredQuestions / quizData.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setAnsweredQuestions(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="overflow-hidden shadow-lg">
        <div className="p-1">
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {quizData.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {score}
            </span>
          </div>

          {showResults ? (
            <QuizResult
              score={score}
              totalQuestions={quizData.length}
              onRetry={handleRetry}
            />
          ) : (
            <Question
              question={currentQuestion}
              onAnswer={handleAnswer}
              onNext={handleNext}
              isLastQuestion={currentQuestionIndex === quizData.length - 1}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuizContainer;
