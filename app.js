const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');

const resolvers = require('./graphql/resolvers');

const sequelize = require('sequelize');
const Util = require('./models/Util');
const Poem = require('./models/Poem');
const Poet = require('./models/Poet');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers,
    context: {
        Util,
        Poem,
        Poet,
        sequelize
    },
    // introspection: true,
    // playground: true,
});

server.applyMiddleware({ app });

// server.applyMiddleware({
//     app,
//     path: '/graphql',
//     cors: {
//         origin: true,
//         credentials: true,
//     },
// });

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(
        `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
});