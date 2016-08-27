import {Component} from '@angular/core'
import {CategoryFormComponent} from './categories/category-form.component'
import {CategoriesListComponent} from './categories/categories-list.component'
import {Category} from './categories/category'

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
