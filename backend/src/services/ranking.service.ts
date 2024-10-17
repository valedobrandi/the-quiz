import SequelizeRanking from "../database/models/SequelizeRanking";
import { IRankingModel } from "../Interfaces/ranking/IRankingModel";
import RankingModel from "../models/RankingModel";

export default class RankingService {
    constructor(private rankingModel: IRankingModel = new RankingModel()) {}

    public async getRanking(): Promise<SequelizeRanking[] | null> {
        return await this.rankingModel.getRanking();
    }
}