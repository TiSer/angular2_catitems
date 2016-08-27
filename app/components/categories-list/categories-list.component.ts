import { Component, OnInit } from '@angular/core' // OnInit - Interface

import { Category } from "../../shared/category.model"
import { CategoryItem } from "../categories-item/category-item.component"
import { CategoryService } from "../../shared/category.service"

// in {} for decorator @Component goes Annotation
@Component ({
  selector: 'categories-list',
  templateUrl: "./app/components/categories-list/categories-list.component.html",
  styleUrls: ["./app/components/categories-list/categories-list.component.css"],
  directives: [CategoryItem],
  providers: [CategoryService]
})

export class CategoriesListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {
    this.categories = [];
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onCategoryDeleted(category: Category) {
    if (category) {
      let index = this.categories.indexOf(category);
      if (index > -1) {
        this.categories.splice(index, 1);
      }
    }
  }
}
