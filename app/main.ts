/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser"/>

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: "catitems",
  template: "<h1>Categories and items</h1>"
})

class AppComponent {
  
}

bootstrap(AppComponent);
