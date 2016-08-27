import { Injectable } from "@angular/core" // Injectable is a decorator

import { InterfaceCategory } from "./category.model"
import { categories } from "./categories.data"

@Injectable()
export class CategoryService {
  getCategories(): InterfaceCategory[] {
    return categories;
  }
}
