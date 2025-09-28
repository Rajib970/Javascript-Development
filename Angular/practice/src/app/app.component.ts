import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent, ReactiveFormsModule, NgIf, FormsModule, UserComponent, CommonModule, CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  amount = 10;
}


