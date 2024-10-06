import { IRanking } from "./IRanking";

export interface IRankingModel {
  getRankingByUserId(userId: number): Promise<IRanking | null>;
}