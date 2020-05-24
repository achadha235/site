import { InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import withApollo from "next-with-apollo";

const backend = `http://localhost:${3001}`;
const wsBackend = `ws://localhost:${3001}`;
const gqlApiPath = "/graphql";

export default withApollo(({ headers, initialState }) => {
  function cookieForwardingFetch(url: RequestInfo, init: RequestInit) {
    const _headers =
      headers && headers.cookie
        ? { ...init.headers, Cookie: headers.cookie }
        : init.headers;
    return fetch(url, { ...init, headers: _headers });
  }

  const httpLink = createHttpLink({
    uri: `${backend}${gqlApiPath}`,
    credentials: "include",
    fetch: cookieForwardingFetch,
  });
  let wsLink;
  if (typeof window !== "undefined") {
    wsLink = new WebSocketLink({
      uri: `${wsBackend}/subscriptions`,
      options: {
        reconnect: true,
      },
    });
  } else {
    wsLink = httpLink;
  }

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: split(
      ({ query }) => {
        if (typeof window === "undefined") {
          return false;
        }
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    ),

    cache: new InMemoryCache({ addTypename: true }).restore(initialState || {}),
  });
});
