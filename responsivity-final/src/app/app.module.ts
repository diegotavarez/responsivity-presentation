import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    AboutComponent,
    NewsComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
