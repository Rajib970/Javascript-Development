import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() getUsers = new EventEmitter();

  users = ['Rajib', 'Shaw'];

  LoadData() {
    this.getUsers.emit(this.users)
  }

}
