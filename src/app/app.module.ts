import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { DescriptionsComponent } from './product-tabs/descriptions/descriptions.component';
import { SpecsComponent } from './product-tabs/specs/specs.component';
import { ReviewsComponent } from './product-tabs/reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTabsComponent,
    DescriptionsComponent,
    SpecsComponent,
    ReviewsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
