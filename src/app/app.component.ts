import { Component } from '@angular/core';
import * as jsonData from '../assets/details.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  details= jsonData
  ngOnInit() {
    
  }
}
