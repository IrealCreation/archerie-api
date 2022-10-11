"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello le monde !');
});
app.get('/user', (req, res) => {
    testDB();
    res.send('Requête d\'utilisateur');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'archerie'
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
