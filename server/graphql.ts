import { prismaObjectType } from "nexus-prisma";

// @ts-ignore
export const Query = prismaObjectType({
  name: "Query",
  definition: t => {
    // auto-generated query
    t.prismaFields(["chat", "chats", "room", "rooms", "user", "users"]);
    // custom  query
  }
});

export const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t => {
    // auto-generated mutation
    t.prismaFields(["createRoom", "createChat"]);
    // custom  mutation
  }
});
