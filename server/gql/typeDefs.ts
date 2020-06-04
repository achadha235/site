const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    verified: Boolean!
  }

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    login(email: String!, password: String, createUser: Boolean): User
  }

  type Subscription {
    userAdded: User!
  }
`;
export default typeDefs;
