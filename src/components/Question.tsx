
import React, { useState } from "react";
import { QuizQuestion } from "@/data/quizData";
import AnswerOption from "./AnswerOption";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  onNext,
  isLastQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const isCorrect = selectedOption === question.correctAnswer;

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setShowFeedback(true);
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    onNext();
  };

  return (
    <div className="animate-fade-in">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">{question.question}</h2>
      
      <div className="mb-6">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            selected={selectedOption === index}
            correct={showFeedback ? index === question.correctAnswer : null}
            disabled={showFeedback}
            onSelect={handleOptionSelect}
          />
        ))}
      </div>
      
      {showFeedback ? (
        <div className="mb-6">
          <div className={`flex items-center p-4 ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded-lg`}>
            {isCorrect ? (
              <Check className="w-5 h-5 mr-2" />
            ) : (
              <X className="w-5 h-5 mr-2" />
            )}
            <p>
              {isCorrect
                ? "Correct! Well done!"
                : `Incorrect. The correct answer is ${question.options[question.correctAnswer]}.`}
            </p>
          </div>
        </div>
      ) : (
        <Button 
          onClick={handleSubmit} 
          disabled={selectedOption === null}
          className="w-full mb-4"
        >
          Submit Answer
        </Button>
      )}
      
      {showFeedback && (
        <Button onClick={handleNext} className="w-full">
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </Button>
      )}
    </div>
  );
};

export default Question;
