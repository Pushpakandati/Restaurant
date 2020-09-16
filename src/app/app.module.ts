import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RestaurantService } from "./restaurant.service";
import { ReviewComponent } from './component/review/review.component';
import { ComponentComponent } from './component/component.component';
import { ModelComponent } from './component/model/model.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    ComponentComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
