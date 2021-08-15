import { Component, AfterContentInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommandService } from '../services/command.service';
import { CommandRead } from '../Types/Command';

@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css'],
})
export class CommandsListComponent implements AfterContentInit {
  dataSource: MatTableDataSource<CommandRead>;
  displayedColumns: string[] = ['howTo', 'platform', 'commandLine', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private commandService: CommandService) {}

  ngAfterContentInit(): void {
    this.commandService.getAllCommands().subscribe((value: CommandRead[]) => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.paginator = this.paginator;
    });
  }
}
