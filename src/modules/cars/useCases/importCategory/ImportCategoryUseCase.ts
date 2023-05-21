import fs from "fs";
import csvParse from "csv-parser";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRespository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const { TYPE, DESCRIPTION } = line;

          categories.push({
            name: TYPE,
            description: DESCRIPTION,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("erro", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRespository.findByName(name);

      if (!existCategory) {
        this.categoriesRespository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
