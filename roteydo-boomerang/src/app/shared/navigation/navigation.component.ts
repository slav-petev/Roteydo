import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  collapsed: boolean = true;

  constructor(private router: Router) {

  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
