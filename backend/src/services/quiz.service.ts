import { IQuestion } from "../Interfaces/questions/IQuestions";
import { ServiceResponse } from "../Interfaces/ServiceResponse";

export default class QuizService {
  private _token = process.env.VITE_TOKEN;

  public async quizQuestions(
    limit = 20
  ): Promise<ServiceResponse<IQuestion[]>> {
    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${this._token}&difficulty=hard&limit=${limit}`
    );

    const data = await response.json();

    const questions = data.map((question: IQuestion) => {
      const getCorrectAnswers = Object.entries(question.correct_answers).find(
        ([_key, value]) => value === "true") || ["", ""];

      const getIndexCorrectAnswer = Object.keys(
        question.correct_answers
      ).indexOf(getCorrectAnswers[0]);

      console.log(getIndexCorrectAnswer);
      
      return {
        ...question,
        correct_answers: getIndexCorrectAnswer,
      };
    });

    const filteredQuestions = questions.filter(
      ({ correct_answers }: { correct_answers: number }) =>
        correct_answers !== -1
    );
    return { status: "SUCCESSFUL", data: filteredQuestions };
  }
}
