import RankingService from "../services/ranking.service";
import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';


export default class RankingController {
  constructor(private rankingService = new RankingService()) {}

  public async getRankingByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const ranking = await this.rankingService.getRankingByUserId(parseInt(userId));
      return res.status(mapStatusHTTP('OK')).json(ranking);
    } catch (error) {
      next(error);
    }
  }
}