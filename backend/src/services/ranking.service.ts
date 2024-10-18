import { ServiceResponse } from "../Interfaces/ServiceResponse";
import { IRankingModel } from "../Interfaces/ranking/IRankingModel";
import RankingModel from "../models/RankingModel";
import { IRanking } from "../Interfaces/ranking/IRanking";

export default class RankingService {
    constructor(private rankingModel: IRankingModel = new RankingModel()) {}

    public async getRanking(): Promise<ServiceResponse<IRanking[]>>{

        const rankingList =  await this.rankingModel.getRanking();

        if (!rankingList) {
            return { status: 'NOT_FOUND', data: {message: 'empty ranking'} };
          }

        return { status: 'SUCCESSFUL', data: rankingList };
    }

    public async register(username: string, score: number): 
    Promise<ServiceResponse<string>> {
        await this.rankingModel.register(username, score);

        return { status: 'CREATED', data: "score saved" };
      }
}