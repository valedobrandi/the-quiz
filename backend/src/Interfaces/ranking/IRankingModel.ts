import { IRanking } from "./IRanking";

export interface IRankingModel {
  getRanking(): Promise<IRanking[] | null> ;
  register(username: string, score: number): Promise<undefined> ;
}