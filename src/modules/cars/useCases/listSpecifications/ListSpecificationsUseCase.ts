import { Specification } from "../../models/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Promise<Specification[]> {
    return this.specificationsRepository.list();
  }
}
