import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private updateCommandsListMission = new Subject();
  commandsUpdated = this.updateCommandsListMission.asObservable();
  constructor() {}

  updateCommandList() {
    this.updateCommandsListMission.next();
  }
}
