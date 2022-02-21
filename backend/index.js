const express = require('express');
const app = express();
const PORT = 4001;
const cors = require('cors'); // Providing middleware
const mongoose = require('mongoose');
const db = 'mongodb+srv://qwerty:qwerty12@cluster0.bnpch.mongodb.net/fire-service-db?retryWrites=true&w=majority';



app.use(cors()); // usage cors middleware
app.use(express.json()); // Распознование объекта как JSON 

async function start() {
    try {
        await mongoose.connect(db);

        console.log("Соединение с базой данных установлено");

        // await client.connect();

        // const users = client.db().collection('users');

        // const user = await users.find();

        // console.log(user);

    } catch (err) {
        console.log(err);
    }
}

app.listen(4001, () => console.log("Server is listening on port", PORT));

start();

app.get('/', async (req, res) => {

    try {

        await client.connect();
        const users = await client.db().collection('users');

        // const users = client.db().collection('users');
        // console.log(db.users.find());
        let b = users.find({ name: "Artem" });

        console.log(b);
        // res.send({users});

        res.send(typeof b);

    } catch (err) {
        console.log(err);
    }
})

// const signup = [];

// app.post('/login', async (req, res) => {
//     try {
//         let login = req.body.login;
//         let password = req.body.password;

//         let userLogin = {
//             login: login,
//             password: password
//         }

//         signup.push(userLogin);

//         return res.send(200).json("Hello, world!");

//     } catch (error) {
//         return res.status(400)
//     }
// })