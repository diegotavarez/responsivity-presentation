import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
//Material design module
import { MaterialModule } from './material.module';

import {PlanService} from './plan.service';

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
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
