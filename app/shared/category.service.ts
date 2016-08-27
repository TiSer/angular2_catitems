import { Injectable } from "@angular/core" // Injectable is a decorator

import { InterfaceCategory } from "./category.model"
import { categories } from "./categories.data"

@Injectable()
export class CategoryService {
  getCategories(): Promise<InterfaceCategory[]> {
    return new Promise(resolve => setTimeout(() => resolve(categories), 1000));
  }

  addCategory(category: InterfaceCategory): void {
    categories.push(category);
  }

  deleteCategory(category: InterfaceCategory): void {
    let index = categories.indexOf(category);
    if (index > -1) {
      categories.splice(index, 1);
    }
  }
}
