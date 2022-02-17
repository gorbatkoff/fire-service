const express = require('express');
const app = express();
const PORT = 4001;
const cors = require('cors'); // Providing middleware

app.use(cors()); // usage cors middleware
app.use(express.json()); // Распознование объекта как JSON 

app.get('/', (req, res) => {
    res.send(signup);
})

const signup = [];

app.post('/login', async (req, res) => {
    try {
        let login = req.body.login;
        let password = req.body.password;

        let userLogin = {
            login: login,
            password: password
        }

        signup.push(userLogin);

        return res.send(200).json("Hello, world!");

    } catch (error) {
        return res.status(400)
    }
})

app.listen(4001, () => console.log("Server is listening on port", PORT));