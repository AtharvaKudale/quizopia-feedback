
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Creating interactive web elements",
      "Database management",
      "Server configuration"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Float",
      "Object"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Document Order Manipulation"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which method is used to add an element at the end of an array?",
    options: [
      "append()",
      "push()",
      "addToEnd()",
      "insert()"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What symbol is used for single-line comments in JavaScript?",
    options: [
      "/* */",
      "#",
      "//",
      "--"
    ],
    correctAnswer: 2
  }
];
