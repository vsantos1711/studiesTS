import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRouter };
