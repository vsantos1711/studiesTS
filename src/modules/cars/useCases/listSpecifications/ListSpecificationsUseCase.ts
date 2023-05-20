import { Specification } from "../../models/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}
