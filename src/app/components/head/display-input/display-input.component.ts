import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-display-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.css'
})
export class DisplayInputComponent {
  
}
