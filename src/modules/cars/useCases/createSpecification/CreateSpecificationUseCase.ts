import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists !== null) {
      throw new Error("Specification already exists!");
    }

    this.specificationRepository.create({ name, description });
  }
}
