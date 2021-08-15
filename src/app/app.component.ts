import { Component, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  constructor(private router: Router) {}

  ngAfterContentChecked(): void {
    this.activeLink = this.router.url;
  }

  activeLink: string = '';
  links: any[] = [{ path: '/commands', name: 'Commands' }];
}
