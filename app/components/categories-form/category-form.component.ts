import {Component, Output, EventEmitter} from "@angular/core"
import {Category} from "../../shared/category.model"

@Component({
  selector: 'category-form',
  templateUrl: "./app/components/categories-form/category-form.component.html",
  styleUrls: ["./app/components/categories-form/category-form.component.css"]
})

export class CategoryFormComponent {
  @Output() added = new EventEmitter();

  add(name: string) {
    if (name) {
      this.added.emit(new Category(name));
    }
  }
}
