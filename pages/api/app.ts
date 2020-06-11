import app, { server, settings } from "nexus";
import "../../graphql/schema";

settings.change({
  server: {
    port: 7777,
  },
});

app.assemble();

export default server.handlers.graphql;
