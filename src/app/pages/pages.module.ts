import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";


@NgModule({
  declarations: [HomeComponent, TableComponent],
  exports: [HomeComponent],
  imports: [CommonModule],
})

export class AppPages {}