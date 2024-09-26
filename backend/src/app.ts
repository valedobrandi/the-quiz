import * as express from 'express';
import 'express-async-errors';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import router from './routes';
import errorMiddleware from './middlewares/errorMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

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
      origin: 'http://172.24.0.3:5173',
    };

    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.use(cookieParser());
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
