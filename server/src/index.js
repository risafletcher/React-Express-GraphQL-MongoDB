require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/schema');
const { setupDB } = require('./config/databaseConnection');
const app = express();

setupDB((v) => console.log(v));

const port = process.env.PORT || 4000;

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
        pretty: true
    })
);

app.listen(port, () => console.log('Server running on port 4000'));