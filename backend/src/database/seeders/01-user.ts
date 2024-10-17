import * as bcrypt from "bcryptjs";
import { QueryInterface } from "sequelize";

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "User1",
          email: "User1@gmail.com",
          password: bcrypt.hashSync(
            "password1",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User2",
          email: "User2@gmail.com",
          password: bcrypt.hashSync(
            "password2",
            parseInt(SALT_ROUNDS as string)
          ),
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete("users", {});
  },
};
