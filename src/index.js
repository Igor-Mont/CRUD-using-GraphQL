const { ApolloServer, gql } = require("apollo-server");

// All requests are POST
// Every request hits the SAME endpoint /graphql

// Query -> Get infos (GET)
// Mutation -> MAnipulate data (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, FLoat e ID

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));