import { schema, use } from "nexus";
import { prisma } from "nexus-plugin-prisma";

use(prisma());

schema.objectType({
  name: "User",
  definition(t) {
    t.model.name();
    t.model.id();
  },
});

schema.queryType({
  definition(t) {
    t.crud.users();
    t.crud.user();
    t.list.field("allUsers", {
      type: "User",
      resolve(_, _args, ctx) {
        return ctx.db.user.findMany();
      },
    });
    t.string("getHello", async () => {
      await new Promise((res) => setTimeout(res, 2000));
      return "world";
    });
    t.string("getYo", async () => {
      await new Promise((res) => setTimeout(res, 2000));
      return "yo";
    });
  },
});

schema.mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.field("BigRedButton", {
      type: "String",
      async resolve(_, _args, ctx) {
        const { count } = await ctx.db.user.deleteMany({});
        return `${count} user(s) destroyed`;
      },
    });
  },
});
