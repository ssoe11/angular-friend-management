import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebaropen = false;
  isExpanded = true;

  sidebarToggler() {
    this.sidebaropen = !this.sidebaropen;
  }
}
