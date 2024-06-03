import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  imports: [ RouterLink, RouterOutlet ],
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html'
})
export class MainComponent {

}
