import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName: string | null = "";
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe(data => {
     this.userName = data['name']
   })
  }


}
