import SequelizeRanking from '../database/models/SequelizeRanking';
import { IRankingModel } from '../Interfaces/ranking/IRankingModel';

export default class RankingModel implements IRankingModel {
    private model = SequelizeRanking;

  public async getRanking(): Promise<SequelizeRanking[] | null> {
    const ranking = await this.model.findAll();
    if (!ranking) return null;
    return ranking;
  }
}

