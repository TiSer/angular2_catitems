import {Component} from '@angular/core'
import {CategoryFormComponent} from './components/categories-form/category-form.component'
import {CategoriesListComponent} from './components/categories-list/categories-list.component'
import {Category} from "./shared/category.model"

@Component({
  selector: "catitems",
  templateUrl: "./app/app.component.html",
  directives: [CategoryFormComponent, CategoriesListComponent]
})

export class AppComponent {
	name: string;
	categories: Category[];

	constructor() {
	  this.name = "Categories and items.";
	  this.categories = [];
	}

  onCategoryAdded(category: Category) {
    this.categories.push(category);
  }

}
