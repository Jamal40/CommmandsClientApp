import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandCreate, CommandRead } from '../Types/Command';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommandService {
  constructor(private client: HttpClient) {}
  baseUrl: string = 'https://localhost:44358/api/commands/';

  public getAllCommands(): Observable<CommandRead[]> {
    return this.client.get<CommandRead[]>(this.baseUrl);
  }
  public addCommand(added: CommandCreate): Observable<CommandRead> {
    return this.client.post<CommandRead>(this.baseUrl, added);
  }
}
