import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import isAuth from "./middleware/authMiddleware";

const app: Express = express();
const port: number = 3000;

// Importing routes
import seanceRoute from "./routes/seanceRoute";
import authRoute from "./routes/authRoute";
import compteRoute from "./routes/compteRoute";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/seance", seanceRoute);
app.use("/auth", authRoute);

// Index route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Bienvenue dans l\'API du site d\'archerie.');
});

// app.use(isAuth); // toute route sous cette ligne sera verifié avec isAuth
app.use("/compte", compteRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
