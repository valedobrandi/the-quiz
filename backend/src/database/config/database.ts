import { Options } from 'sequelize';
import { URL } from 'url'

const uri = process.env.DATABASE_URL || 'postgres://root:123456@postgres-quiz-db:5432/quiz'

const parsedUrl = new URL(uri)

const host = parsedUrl.hostname;
const database = parsedUrl.pathname.split('/')[1];
const user = parsedUrl.username;
const port = parsedUrl.port;
const password = parsedUrl.password;

const config: Options = {
  host: host ,
  port: Number(port),
  username: user,
  database: database,
  password: password,
  dialect: 'postgres',
}


export = config;
