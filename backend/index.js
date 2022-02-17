const express = require('express');

const app = express();
const PORT = 4001;

app.get('/', (req, res) => res.send("Hello API"));

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))