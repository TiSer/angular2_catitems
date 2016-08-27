import {Component, Output, EventEmitter} from "@angular/core"
import {Category} from "./category";

@Component({
  selector: 'category-form',
  templateUrl: "./app/categories/category-form.component.html",
  styleUrls: ['./app/categories/category-form.component.css']
})

export class CategoryFormComponent {
  @Output() added = new EventEmitter();

  add(name: string) {
    if (name) {
      this.added.emit(new Category(name));
    }
  }
}
