import { Router } from "express";
import { specificationsRouter } from "./specifications.routes";
import { categoriesRouter } from "./categories.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRouter);

export { router };
