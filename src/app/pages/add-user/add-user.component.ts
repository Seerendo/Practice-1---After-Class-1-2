import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../interfaces/user.interface';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Input('newUser') newUser: Users = {
    email: '',
    phone: 0,
    first_name: '',
    last_name: '',
    age: 0,
  };

  constructor(private userService: TableDataService) {}

  addUser(): void {
    this.userService.addUser(this.newUser);
    this.newUser = {
      email: '',
      phone: 0,
      first_name: '',
      last_name: '',
      age: 0,
    };
  }
}
