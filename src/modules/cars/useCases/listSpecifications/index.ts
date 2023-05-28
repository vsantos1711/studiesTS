import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = new SpecificationsRepository();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
