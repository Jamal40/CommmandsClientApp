import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commands-home',
  templateUrl: './commands-home.component.html',
  styleUrls: ['./commands-home.component.css'],
})
export class CommandsHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToAddCommand() {
    this.router.navigate(['/', 'commands', 'add']);
  }
}
