import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "ranking",
      [
        { userId: 1, ranking: 1, points: 100 },
        { userId: 2, ranking: 2, points: 90 },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("ranking", {});
  },
};
