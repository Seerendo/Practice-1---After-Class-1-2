import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [HomeComponent, TableComponent, AddComponent],
  exports: [HomeComponent],
  imports: [CommonModule],
})
export class AppPages {}
