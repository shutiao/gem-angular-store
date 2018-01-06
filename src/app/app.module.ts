import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import { DescriptionsComponent } from './product-tabs/descriptions/descriptions.component';
import { SpecsComponent } from './product-tabs/specs/specs.component';
import { ReviewsComponent } from './product-tabs/reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';

import { GemDataService } from './gem-data.service';
 
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
  	BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [GemDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
