const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App V.1.0"
    });
});

app.get('/users', (req, res) => {
    res.status(200).json([
        {
            name: "Eksa",
            age: 19
        },
        {
            name: "Pramindanata",
            age: 20
        }
    ]);
});

app.listen(3000);

module.exports.app = app;