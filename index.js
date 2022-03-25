import { ServerConfig } from "./config/index.js";
import { ConfigService } from "./config/index.js";
import routers from "./router/index.js";

async function main() {
  const port = ConfigService.get("PORT");
  const server = new ServerConfig({
    port,
    middlewares: [],
    routers
  });

  server.listen();
}

main();
