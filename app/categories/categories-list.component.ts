import { Component, Input } from '@angular/core' // Input is a decocator
import { CategoryItem } from './category-item.component'
import { Category } from './category'

// in {} for @Component goes Annotation
@Component ({
  selector: 'categories-list',
  templateUrl: "./app/categories/categories-list.component.html",
  styleUrls: ["./app/categories/categories-list.component.css"],
  directives: [CategoryItem]
})

export class CategoriesListComponent {
  @Input() categories: Category[];

  onCategoryDeleted(category: Category) {
    if (category) {
      let index = this.categories.indexOf(category);
      if (index > -1) {
        this.categories.splice(index, 1);
      }
    }
  }
}
