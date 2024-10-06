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
          password: bcrypt.hashSync(
            "password1",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User2",
          password: bcrypt.hashSync(
            "password2",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User3",
          password: bcrypt.hashSync(
            "password3",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User4",
          password: bcrypt.hashSync(
            "password4",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User5",
          password: bcrypt.hashSync(
            "password5",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User6",
          password: bcrypt.hashSync(
            "password6",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User7",
          password: bcrypt.hashSync(
            "password7",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User8",
          password: bcrypt.hashSync(
            "password8",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User9",
          password: bcrypt.hashSync(
            "password9",
            parseInt(SALT_ROUNDS as string)
          ),
        },
        {
          username: "User10",
          password: bcrypt.hashSync(
            "password10",
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
