import { Component, AfterContentInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { MissionService } from '../services/mission.service';
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

  constructor(
    private commandService: CommandService,
    private router: Router,
    private missionService: MissionService
  ) {}

  ngAfterContentInit(): void {
    this.fillList();
    this.missionService.commandsUpdated.subscribe((value) => {
      this.fillList();
    });
  }

  private fillList() {
    this.commandService.getAllCommands().subscribe((value: CommandRead[]) => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.paginator = this.paginator;
    });
  }

  goToEdit(id: number) {
    this.router.navigate(['/', 'commands', 'edit', id]);
  }
  delete(id: number) {
    this.commandService.deleteCommand(id).subscribe((value) => {
      this.missionService.updateCommandList();
    });
  }
}
