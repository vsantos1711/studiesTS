import { Specification } from "../../models/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

export class CategoriesRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(Specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const SpecificationAlreadyExists = this.specifications.find(
      (specification) => specification.name === name
    );

    return SpecificationAlreadyExists;
  }
}
