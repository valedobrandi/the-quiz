import * as express from 'express';
import 'express-async-errors';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import router from './routes';
import sequelize from './database/models';
import errorMiddleware from './middlewares/errorMiddleware';

const CORS_ORIGIN = process.env.CORS_CONFIG || 'http://localhost:3000'

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(cookieParser());

    this.config();

    this.routes();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.status(200).json({ ok: true }));

    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo.
    // Mantenha ele sempre como o último middleware a ser chamado.
    this.app.use(errorMiddleware);
  }

  private config():void {
    const corsOptions = {
      origin: [CORS_ORIGIN],
      optionsSuccessStatus: 200
    };

    this.app.use(cors(corsOptions));
    this.app.use(express.json());
  }
  
  private routes(): void {
    this.app.use(router);
  }

  public async assertDatabaseConnection(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.log('Unable to connect to the database:', error);
    }
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
