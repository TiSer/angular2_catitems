import {Component} from '@angular/core'

@Component({
  selector: "catitems",
  templateUrl: "./app/app.component.html"
})

export class AppComponent {
	title: string;
	categories: string[];

	constructor() {
	  this.title = "Categories and items.";
	  this.categories = [];
	}

  addCategory(input: HTMLInputElement) {
    let title = input.value;
    input.value = '';
    this.categories.push(title);
  }

}
