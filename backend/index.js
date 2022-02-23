const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors'); // require cors policy
const { body } = require('express-validator');
const { errorsHandler } = require('./errorsHandler');

const app = express();
const PORT = 4001;
const client = new MongoClient('mongodb+srv://qwerty:qwerty12@cluster0.bnpch.mongodb.net/fire-service-db?retryWrites=true&w=majority')

app.use(cors()); // usage cors middleware
app.use(express.json()); // Распознование объекта как JSON

const start = async () => {
    try {
        await client.connect();
        console.log("Подключение к базе прошло успешно");
    }
    catch (err) {
        console.log(err);
    }
}

app.post("/login",
    body('login').notEmpty().withMessage('Login is empty'),
    body('password').notEmpty().withMessage('Passoword is empty'),
    errorsHandler,

    async (req, res) => {
        try {
            let login = req.body.login;
            let password = req.body.password;

            const users = client.db().collection("users");

            await users.insertOne({
                username: login,
                password: password
            });

            return res.status(200).send("Everything is okey");

        } catch (error) {
            return res.status(400).send("Something gone wrong");
        }
    })

app.listen(PORT, () => console.log('server is listening on port ' + PORT));

start();