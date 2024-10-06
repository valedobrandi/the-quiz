import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "ranking",
      [
        { userId: 1, ranking: 1, points: 100 },
        { userId: 2, ranking: 2, points: 90 },
        { userId: 3, ranking: 3, points: 80 },
        { userId: 4, ranking: 4, points: 70 },
        { userId: 5, ranking: 5, points: 60 },
        { userId: 6, ranking: 6, points: 50 },
        { userId: 7, ranking: 7, points: 40 },
        { userId: 8, ranking: 8, points: 30 },
        { userId: 9, ranking: 9, points: 20 },
        { userId: 10, ranking: 10, points: 10 },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("ranking", {});
  },
};
