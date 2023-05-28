import { Category } from "../../models/Category";
import { prisma } from "../../../../database/prismaClient";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";
export class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  async findByName(categoryName: string): Promise<Category> {
    const category = await prisma.category.findFirst({
      where: {
        name: categoryName,
      },
    });

    return category || null;
  }
}
