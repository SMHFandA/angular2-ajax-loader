import { Component, ViewChild, ViewChildren } from '@angular/core';

import { LoaderComponent } from './components/loader.component';

@Component({
  selector: 'my-app',
  template: `
              <h1>Hello {{name}}</h1>
              <button (click)="hideLoader1()">Hide Loader</button>
              <button (click)="showLoader1()">Show Loader</button>
              <loader-component [id]="'loader-1'">
                <div style="padding: 10px; margin: 10px 0; text-align: center; background: red;">
                  <h2>In loader component</h2>
                </div>
              </loader-component>

              <button (click)="hideLoader2()">Hide Loader</button>
              <button (click)="showLoader2()">Show Loader</button>
              <loader-component [id]="'loader-2'">
                <div style="padding: 10px; margin: 10px 0; text-align: center; background: red;">
                  <h2>In loader component</h2>
                </div>
              </loader-component>
            `
})
export class AppComponent  {

  @ViewChildren(LoaderComponent)
  loaders: QueryList<LoaderComponent>;

  hideLoader1() {
    this.loaders.first.hide();
  }

  showLoader1() {
    this.loaders.first.show();
  }

  hideLoader2() {
    this.loaders.last.hide();
  }

  showLoader2() {
    this.loaders.last.show();
  }

}
