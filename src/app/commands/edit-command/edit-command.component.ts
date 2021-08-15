import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { CommandRead } from '../Types/Command';

@Component({
  selector: 'app-edit-command',
  templateUrl: './edit-command.component.html',
  styleUrls: ['./edit-command.component.css'],
})
export class EditCommandComponent implements OnInit {
  constructor(
    private commandService: CommandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  currnetCommandId: number;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value: ParamMap) => {
      this.commandService
        .getCommandById(Number(value.get('id')))
        .subscribe((value: CommandRead) => {
          this.currnetCommandId = value.id;
          this.commandForm.patchValue(value);
        });
    });
  }

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
      .editCommand(this.currnetCommandId, this.commandForm.value)
      .subscribe((value) => {
        this.router.navigate(['/', 'commands']);
      });
  }
}
