import { postgraphile } from "postgraphile";
import { environment } from "./environment/environment";

const dbUrl = "postgres://"+
              environment.db.user+":"+
              environment.db.password+"@"+
              environment.db.host+":"+
              environment.db.port+"/"+
              environment.db.name;
const dbSchema = environment.db.schema;

export const middleware = postgraphile(
   dbUrl, 
   dbSchema,
   {
    watchPg: true,
    graphiql: true,
    dynamicJson: true,
    showErrorStack: "json",
    extendedErrors: ["hint", "detail", "errcode"],
    appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
    exportGqlSchemaPath: "schema.graphql",
    enhanceGraphiql: true
  }
);

