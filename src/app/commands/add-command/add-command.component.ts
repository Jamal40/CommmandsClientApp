import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css'],
})
export class AddCommandComponent implements OnInit {
  constructor(private commandService: CommandService, private router: Router) {}

  ngOnInit(): void {}

  commandForm = new FormGroup({
    howTo: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
    ]),
    platform: new FormControl('', [Validators.required]),
    commandLine: new FormControl('', [Validators.required]),
  });

  addCommand() {
    this.commandService
      .addCommand(this.commandForm.value)
      .subscribe((value) => {
        this.router.navigate(['/', 'commands']);
      });
  }
}
