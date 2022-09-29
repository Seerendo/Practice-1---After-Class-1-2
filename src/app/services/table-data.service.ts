import { Injectable } from '@angular/core';
import { Users } from '../interfaces/user.interface';

@Injectable()
export class TableDataService {
  private _table: Users[] = [
    {
      email: 'johndoe@johndoe.com',
      phone: 1800000,
      first_name: 'John',
      last_name: 'Doe',
      age: 0,
    },
  ];

  get users(): Users[] {
    return [...this._table];
  }
}
