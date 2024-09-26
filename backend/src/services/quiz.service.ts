import { IQuestion } from '../Interfaces/questions/IQuestions';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class QuizService {
  private _token = process.env.VITE_TOKEN;

  public async quizQuestions(limit = 20): Promise<ServiceResponse<IQuestion[]>> {
    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${this._token}&difficulty=hard&limit=${limit}`,
    );

    const data = await response.json();

    const questions = data.map((question: IQuestion) => ({
      ...question,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      correct_answers: Object.entries(question.correct_answers).findIndex(
        ([_key, value]) => value === 'true',
      ),
    }));
    return { status: 'SUCCESSFUL', data: questions };
  }
}
