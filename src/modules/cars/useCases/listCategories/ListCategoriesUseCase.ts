import { Category } from "../../models/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}
