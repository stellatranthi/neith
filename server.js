require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req,res) => {
    return res.send(`<h1>Hello. Welcome to Neith</h1>`);
});

app.use(mainRoutes);

app.listen(PORT, () => console.log('Server ready'))



