import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
