import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect("mongodb+srv://mongodb_graph:mongo_graph@cluster0.kbzaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

export { startServer };