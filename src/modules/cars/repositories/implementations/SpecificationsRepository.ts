import { Specification } from "../../models/Specification";
import { prisma } from "../../../../database/prismaClient";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    await prisma.specification.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Specification[]> {
    const specifications = await prisma.specification.findMany();
    return specifications;
  }

  async findByName(specificationName: string): Promise<Specification> {
    const specification = await prisma.specification.findFirst({
      where: {
        name: specificationName,
      },
    });

    return specification || null;
  }
}
