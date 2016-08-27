import {Component} from '@angular/core'

import {CategoryService} from './shared/category.service'
import {CategoryFormComponent} from './components/categories-form/category-form.component'
import {CategoriesListComponent} from './components/categories-list/categories-list.component'
import {Category} from "./shared/category.model"
import {categories} from './shared/categories.data'

@Component({
  selector: "catitems",
  templateUrl: "./app/app.component.html",
  directives: [CategoryFormComponent, CategoriesListComponent],
  providers: [CategoryService]
})

export class AppComponent {
	name: string;

	constructor() {
	  this.name = "Categories and items.";
	}

}
