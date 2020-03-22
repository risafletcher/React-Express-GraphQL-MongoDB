require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema');
const { setupDB } = require('./config/databaseConnection');
const app = express();

setupDB((v) => console.log(v));

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphql: true,
        pretty: true
    })
);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Express server running on port 4000'));