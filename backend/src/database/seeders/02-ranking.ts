import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "rankings",
      [
        { username: "bbb", score: 10 },
        { username: "bbb", score: 20 },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("rankings", {});
  },
};
