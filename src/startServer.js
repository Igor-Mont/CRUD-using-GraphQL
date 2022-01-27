import { ApolloServer } from "apollo-server";
import { PubSub } from "graphql-subscriptions";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  mongoose.connect("mongodb+srv://mongodb_graph:mongo_graph@cluster0.kbzaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


  const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });
  server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

export { startServer };