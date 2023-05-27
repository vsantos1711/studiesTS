import { Category } from "../../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

import { prisma } from "../../../../database/prismaClient";
export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<any> {
    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const categoryAlreadyExists = this.categories.find(
      (category) => category.name === name
    );

    return categoryAlreadyExists;
  }
}
