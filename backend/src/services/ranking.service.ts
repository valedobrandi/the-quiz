import { IRanking } from "../Interfaces/ranking/IRanking";
import { IRankingModel } from "../Interfaces/ranking/IRankingModel";
import RankingModel from "../models/RankingModel";

export default class RankingService {
    constructor(private rankingModel: IRankingModel = new RankingModel()) {}

    public async getRankingByUserId(userId: number): Promise<IRanking | null> {
        return await this.rankingModel.getRankingByUserId(userId);
    }
}