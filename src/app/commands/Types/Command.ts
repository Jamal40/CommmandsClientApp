export interface CommandRead {
  howTo: string;
  commandLine: string;
  platform: string;
}

export interface CommandCreate {
  howTo: string;
  commandLine: string;
  platform: string;
}

export interface CommandUpdate {
  howTo: string;
  commandLine: string;
  platform: string;
}

export interface Patch {
  op: string;
  path: string;
  value: string;
}
