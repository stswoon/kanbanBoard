import {Injectable} from '@angular/core';

@Injectable()
export class BoardService {
  private userEMail: string;

  constructor() {
  }

  getUserEMail(): string {
    return this.userEMail;
  }
}
