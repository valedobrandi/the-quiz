import SequelizeRanking from '../database/models/SequelizeRanking';
import { IRanking } from '../Interfaces/ranking/IRanking';
import { IRankingModel } from '../Interfaces/ranking/IRankingModel';

export default class RankingModel implements IRankingModel {
    private model = SequelizeRanking;

  public async getRankingByUserId(userId: number): Promise<IRanking | null> {
    const ranking = await this.model.findOne({ where: { userId } });
    if (!ranking) return null;
    return ranking.dataValues;
  }
}

