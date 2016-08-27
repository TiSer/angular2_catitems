import {Component} from '@angular/core'

@Component({
  selector: "catitems",
  template: `<h1>{{ title }}</h1>
            <ul>
              <li *ngFor="#list of categories">{{list}}</li>
            </ul>
            `
})

export class AppComponent {
	title: string;
	categories: string[];

	constructor() {
	  this.title = "Categories and items.";
	  this.categories = ["Lenovo", "HP", "Dell", "Mac"];
	}

}
