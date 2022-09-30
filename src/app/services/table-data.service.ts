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
    {
      email: 'a',
      phone: 12345,
      first_name: 'A',
      last_name: 'Aa',
      age: 1,
    },
  ];

  get users(): Users[] {
    return [...this._table];
  }

  addUser(user: Users): void {
    this._table.push(user);
    console.log('Agree!');
  }

  deleteUser():void {
    
  }
}
