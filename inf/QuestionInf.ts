export interface Question {
  seq: number;
  title: string;
  minDesc: string;
  maxDesc: string;
}

export interface QuestionType {
  question_type_id: number;
  code: string;
  description: string;
  directions: string;
  version: number;
  questions: Question[];
}

export interface Questions {
  question_types: QuestionType[];
}

