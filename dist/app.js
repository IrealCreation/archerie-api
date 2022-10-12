"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Importing routes
const seanceRoutes_1 = __importDefault(require("./routes/seanceRoutes"));
app.use("/seance", seanceRoutes_1.default);
app.get('/', (req, res) => {
    res.status(200).send('Bienvenue dans l\'API du site d\'archerie.');
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
// MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'archery'
});
function testDB() {
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        if (err)
            throw err;
        console.log('The solution is: ', rows[0].solution);
    });
    connection.end();
}
