import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users = [
    {
      id: '1',
      name: 'Rajib',
      age: 20,
      email: 'test@gmail.com'
    },
    {
      id: '2',
      name: 'Sam',
      age: 25,
      email: 'test@gmail.com'
    },
    {
      id: '3',
      name: 'Jam',
      age: 26,
      email: 'test@gmail.com'
    },
    {
      id: '4',
      name: 'Kam',
      age: 30,
      email: 'test@gmail.com'
    }
  ]
}
