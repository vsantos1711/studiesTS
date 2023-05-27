import { Category } from "../../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

import { prisma } from "../../../../database/prismaClient";
export class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }: ICreateCategoryDTO): Promise<any> {
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
