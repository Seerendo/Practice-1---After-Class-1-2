import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/user.interface';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  public tables: Users[] = [
    {
      email: 'a',
      phone: 12345,
      first_name: 'A',
      last_name: 'Aa',
      age: 1,
    },
    {
      email: 'a',
      phone: 12345,
      first_name: 'A',
      last_name: 'Aa',
      age: 1,
    },
  ];

  constructor(private userService: TableDataService) {}
}
