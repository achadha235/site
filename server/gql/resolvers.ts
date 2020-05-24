import { PubSub } from "apollo-server";

export const pubsub = new PubSub();

const USER_ADDED = "USER_ADDED";

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findOne({ id });
    },
  },
  Mutation: {
    async register(
      root,
      { firstName, lastName, email, password },
      { models, pubsub }
    ) {
      return models.User.find({ limit: 1 });
    },
  },

  Subscription: {
    userAdded: {
      subscribe: () => pubsub.asyncIterator([USER_ADDED]),
    },
  },

  User: {
    async verified(user, _, { models }) {
      return true;
    },
  },
};
export default resolvers;
