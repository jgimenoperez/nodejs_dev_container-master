import { Router } from "express";
const router = Router();

import setFruitRoutesV2 from "./fruit.routes.js";
setFruitRoutesV2(router);

export const fruitRouterV2 = {
  baseUrl: "/api/v1",
  router
};
