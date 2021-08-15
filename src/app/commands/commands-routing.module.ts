import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommandComponent } from './add-command/add-command.component';
import { CommandsHomeComponent } from './commands-home/commands-home.component';
import { EditCommandComponent } from './edit-command/edit-command.component';

const routes: Routes = [
  { path: 'commands', component: CommandsHomeComponent },
  { path: 'commands/add', component: AddCommandComponent },
  { path: 'commands/edit/:id', component: EditCommandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandsRoutingModule {}
