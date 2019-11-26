const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const { importSchema } = require('graphql-import');
const path = require('path');
const resolvers = require('./resolvers');

const importedSchema = importSchema(path.resolve(__dirname, 'schemas.graphql'));
const schema = buildSchema(importedSchema);

const app = express();

// Since we configured graphqlHTTP with graphiql: true, you can use the GraphiQL tool 
// to manually issue GraphQL queries. 
// If you navigate in a web browser to http://localhost:3000/graphql, 
// you should see an interface that lets you enter queries.
app.use('/graphql', graphqlHttp({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Running a GraphQL API server at http://localhost:3000/graphql')
});

