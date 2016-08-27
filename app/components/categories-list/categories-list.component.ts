import { Component, OnInit } from '@angular/core' // OnInit - Interface

import { InterfaceCategory, Category } from "../../shared/category.model"
import { CategoryItem } from "../categories-item/category-item.component"
import { CategoryService } from "../../shared/category.service"

// in {} for decorator @Component goes Annotation
@Component ({
  selector: 'categories-list',
  templateUrl: "./app/components/categories-list/categories-list.component.html",
  styleUrls: ["./app/components/categories-list/categories-list.component.css"],
  directives: [CategoryItem]
})

export class CategoriesListComponent implements OnInit {
  categories: InterfaceCategory[];

  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  onCategoryDeleted(category: InterfaceCategory): void { //void - it returns nothing
    this.categoryService.deleteCategory(category);
  }
}
