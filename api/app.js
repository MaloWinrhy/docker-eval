const express = require('express');
const { connectDB } = require('./src/config/db');
const bookRouter = require('./src/routes/bookRoute');
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'Welcome to the API' });
});

app.use('/books', bookRouter);

app.listen(port, () => {
    console.log(`serverPort${port}`);
});

module.exports = app;
