import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "../listSpecifications/ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const allSpecificaitons = await this.listSpecificationsUseCase.execute();

    return response.json(allSpecificaitons);
  }
}
