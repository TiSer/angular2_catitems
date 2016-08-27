import {Component, Output, EventEmitter} from "@angular/core"
import {Category} from "../../shared/category.model"
import {CategoryService} from "../../shared/category.service"

@Component({
  selector: 'category-form',
  templateUrl: "./app/components/categories-form/category-form.component.html",
  styleUrls: ["./app/components/categories-form/category-form.component.css"]
})

export class CategoryFormComponent {
  @Output() added = new EventEmitter();

  constructor(private categoryService: CategoryService) {

  }

  add(name: string): void {
    if (name) {
      let category = new Category(name);
      this.categoryService.addCategory(category);
      //this.added.emit(new Category(name));
    }
  }
}
