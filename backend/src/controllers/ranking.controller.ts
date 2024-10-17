import RankingService from "../services/ranking.service";
import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';


export default class RankingController {
  constructor(private rankingService = new RankingService()) {}

  public async getRankingByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const ranking = await this.rankingService.getRanking();
      return res.status(mapStatusHTTP('OK')).json(ranking);
    } catch (error) {
      next(error);
    }
  }
}