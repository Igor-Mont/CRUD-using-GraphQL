const { ApolloServer, gql } = require("apollo-server");

// All requests are POST
// Every request hits the SAME endpoint /graphql

// Query -> Get infos (GET)
// Mutation -> MAnipulate data (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, FLoat e ID

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  { _id: String(Math.random()), name: 'Igor', email: 'igor@test.com', active: true},
  { _id: String(Math.random()), name: 'Nathan', email: 'nathan@test.com', active: false},
  { _id: String(Math.random()), name: 'Santos', email: 'santos@test.com', active: true},
];

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    users: () => users,
    getUserByEmail: (_, args) => users.find(user => user.email === args.email)
  },
  Mutation: {
    createUser: (_, args) => {
      const user = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true
      };

      users.push(user);

      return user;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));