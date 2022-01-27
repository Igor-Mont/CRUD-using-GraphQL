import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { join } from "path";

const resolversArray = loadFilesSync(join(__dirname, "modules", "**", "resolvers.js"));
const resolvers = mergeResolvers(resolversArray);

export default resolvers;