import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Category} from "./category";

@Component({
  selector: "category-item",
  templateUrl: "./app/categories/category-item.component.html",
  styleUrls: ["./app/categories/category-item.component.css"]
})

export class CategoryItem {
  @Input() category: Category;
  @Output() deleted = new EventEmitter();

  delete() {
    this.deleted.emit(this.category);
  }
}
