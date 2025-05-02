import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FootherComponent } from "./components/footer/foother.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FootherComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebatecnica';
}
