import "reflect-metadata";
import http from "http";
import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import { parse } from "url";
import next from "next";
import config from "../config";
import Router from "../src/routes";
import bodyParser from "body-parser";
import typeDefs from "./gql/typeDefs";
import resolvers from "./gql/resolvers";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { User } from "./entity/User";
import { pubsub } from "./gql/resolvers";

const port = config.PORT;
const dev = config.NEXT_DEV;
const app = next({ dev: dev });
const handle = app.getRequestHandler();

import dbConfig from "../ormconfig";

export const server = app.prepare().then(async () => {
  let connection;
  let models;
  try {
    connection = await createConnection({
      database: dbConfig.database,
      type: "postgres",
      username: dbConfig.username,
      password: dbConfig.password,
      port: dbConfig.port,
      synchronize: false,
      logging: false,
      entities: [User],
    });
    models = {
      User: connection.getRepository(User),
    };
    console.log("Connected to database");
  } catch (err) {
    console.error(err);
  }

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    subscriptions: {
      onConnect: (connectionParams, webSocket) => {
        console.log("Socket connected for subscription");
      },
    },
    context: { models, pubsub },
  });

  const server = express();
  server.use(compression());
  server.use(cookieParser());
  server.use(Router);

  server.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
  server.use(bodyParser.json({ limit: "50mb" }));

  apolloServer.applyMiddleware({ app: server });

  const httpServer = http.createServer(server);

  apolloServer.installSubscriptionHandlers(server as any);

  server.get("/", (req, res) => {
    app.render(req, res, "/", req.query);
  });

  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  SubscriptionServer.create(
    {
      schema: (apolloServer as any).schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
    }
  );

  httpServer.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
});
