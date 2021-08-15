import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandsRoutingModule } from './commands-routing.module';
import { AddCommandComponent } from './add-command/add-command.component';
import { EditCommandComponent } from './edit-command/edit-command.component';
import { CommandsHomeComponent } from './commands-home/commands-home.component';
import { CommandsListComponent } from './commands-list/commands-list.component';


@NgModule({
  declarations: [
    AddCommandComponent,
    EditCommandComponent,
    CommandsHomeComponent,
    CommandsListComponent
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule
  ]
})
export class CommandsModule { }
