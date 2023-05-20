import { Router } from "express";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  response.send("Rota de specifications");
});

export { specificationsRouter };
