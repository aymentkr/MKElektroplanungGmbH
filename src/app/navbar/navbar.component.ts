import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller,private router: Router) {}

  public onClick(elementId: string,): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    this.viewportScroller.scrollToAnchor(elementId);
  }

  exit() {
    location.reload();
    window.scrollTo(0, 0);
  }
}
