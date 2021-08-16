import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommandsRoutingModule } from './commands-routing.module';
import { AddCommandComponent } from './add-command/add-command.component';
import { EditCommandComponent } from './edit-command/edit-command.component';
import { CommandsHomeComponent } from './commands-home/commands-home.component';
import { CommandsListComponent } from './commands-list/commands-list.component';

//Angular material modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AddCommandComponent,
    EditCommandComponent,
    CommandsHomeComponent,
    CommandsListComponent,
  ],
  imports: [
    CommonModule,
    CommandsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
})
export class CommandsModule {}
