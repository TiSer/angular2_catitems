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
	  this.categories = ["Lenovo", "HP", "Dell", "Mac"];
	}

}
