import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port: number = 3000;

// Importing routes
import seanceRoute from "./routes/seanceRoutes";

app.use("/seance", seanceRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello le monde !');
});

app.get('/user', (req: Request, res: Response) => {
    testDB();
    res.send('Requête d\'utilisateur');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'archery'
});

function testDB(): void {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', (err: any, rows: any[], fields: any) => {
        if (err)
            throw err;

        console.log('The solution is: ', rows[0].solution);
    });

    connection.end();
}
