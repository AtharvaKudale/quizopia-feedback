
import React from "react";
import QuizContainer from "@/components/QuizContainer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JavaScript Quiz</h1>
        <p className="text-gray-600">
          Test your JavaScript knowledge with these multiple-choice questions
        </p>
      </div>
      
      <QuizContainer />
    </div>
  );
};

export default Index;
