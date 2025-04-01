
import React from "react";
import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  option: string;
  index: number;
  selected: boolean;
  correct: boolean | null;
  disabled: boolean;
  onSelect: (index: number) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  index,
  selected,
  correct,
  disabled,
  onSelect,
}) => {
  const letters = ["A", "B", "C", "D"];

  const getOptionClass = () => {
    if (selected && correct === true) {
      return "border-green-500 bg-green-100 hover:bg-green-100";
    }
    if (selected && correct === false) {
      return "border-red-500 bg-red-100 hover:bg-red-100";
    }
    if (selected) {
      return "border-purple-500 bg-purple-100";
    }
    return "border-gray-300 hover:border-purple-500 hover:bg-purple-50";
  };

  return (
    <button
      className={cn(
        "flex items-center w-full p-4 mb-3 text-left transition-all duration-200 border-2 rounded-lg",
        getOptionClass()
      )}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
      aria-pressed={selected}
    >
      <div className="flex items-center justify-center w-8 h-8 mr-4 text-sm font-medium text-white bg-purple-600 rounded-full">
        {letters[index]}
      </div>
      <span className="text-base">{option}</span>
    </button>
  );
};

export default AnswerOption;
