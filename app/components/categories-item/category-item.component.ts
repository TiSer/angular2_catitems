import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Category} from "../../shared/category.model"

@Component({
  selector: "category-item",
  templateUrl: "./app/components/categories-item/category-item.component.html",
  styleUrls: ["./app/components/categories-item/category-item.component.css"]
})

export class CategoryItem {
  @Input() category: Category;
  @Output() deleted = new EventEmitter();

  delete() {
    this.deleted.emit(this.category);
  }
}
