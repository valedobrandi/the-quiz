import SequelizeRanking from "../../database/models/SequelizeRanking";

export interface IRankingModel {
  getRanking(): Promise<SequelizeRanking[] | null> ;
}