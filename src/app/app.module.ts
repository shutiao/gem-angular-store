import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { DescriptionsComponent } from './product-tabs/descriptions/descriptions.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTabsComponent,
    DescriptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
