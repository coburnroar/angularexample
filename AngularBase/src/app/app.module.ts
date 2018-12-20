import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { CarDisplayComponent } from './components/car-display/car-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CarSearchComponent,
    CarDisplayComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
