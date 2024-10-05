import { Component } from '@angular/core';
import { DisplayInputComponent } from '../head/display-input/display-input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DisplayInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
