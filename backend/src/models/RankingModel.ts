import { IRanking } from '../Interfaces/ranking/IRanking';
import SequelizeRanking from '../database/models/SequelizeRanking';
import { IRankingModel } from '../Interfaces/ranking/IRankingModel';

export default class RankingModel implements IRankingModel {
    private model = SequelizeRanking;

  public async getRanking(): Promise<IRanking[] | null> {
    const ranking = await this.model.findAll();
    if (!ranking.length) return null;
    return ranking.map(rank => rank.dataValues);
  }

  public async register(username: string, score: number): Promise<undefined> {
    await this.model.create({username, score});
  }
}

