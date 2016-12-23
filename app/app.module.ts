import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoaderComponent } from './components/loader.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
