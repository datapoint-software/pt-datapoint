import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  imports: [ RouterLink, RouterOutlet ],
  selector: 'app-fe',
  standalone: true,
  templateUrl: './fe.component.html'
})
export class FeComponent {

}
