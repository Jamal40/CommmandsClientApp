import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandsHomeComponent } from './commands-home/commands-home.component';

const routes: Routes = [{ path: 'commands', component: CommandsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandsRoutingModule {}
