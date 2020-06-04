import { PubSub } from "apollo-server";

import { User } from "../../server/entity/User";

import emailer from "../email";

export const pubsub = new PubSub();

const USER_ADDED = "USER_ADDED";

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findOne({ id });
    },
  },
  Mutation: {
    async login(root, { email, password, createUser }, { models, pubsub }) {
      if (createUser) {
        let newUser = new User();
        newUser.email = email;
        newUser.verified = false;

        let info = await emailer.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: email,
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);

        return newUser.save();
      } else {
        console.log(email);
        return models.User.find({ email });
      }
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
