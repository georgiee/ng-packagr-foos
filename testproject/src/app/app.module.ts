import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooModule } from '@scoped/some-name';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
