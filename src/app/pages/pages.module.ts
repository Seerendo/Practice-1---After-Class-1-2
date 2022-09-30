import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [HomeComponent, TableComponent, AddUserComponent],
  exports: [HomeComponent],
  imports: [CommonModule],
})
export class PagesModule {}
