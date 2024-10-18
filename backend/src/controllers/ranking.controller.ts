import RankingService from "../services/ranking.service";
import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';


export default class RankingController {
  constructor(private rankingService = new RankingService()) {}

  public async getRanking(req: Request, res: Response, next: NextFunction) {
    try {
      
      const {status, data} = await this.rankingService.getRanking();
      
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const {username, score} = req.body;
      const {status, data} = await this.rankingService.register(username, score);
      return res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}