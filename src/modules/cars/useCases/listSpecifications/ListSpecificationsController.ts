import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "../listSpecifications/ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const allSpecificaitons = this.listSpecificationsUseCase.execute();

    return response.send(allSpecificaitons);
  }
}
