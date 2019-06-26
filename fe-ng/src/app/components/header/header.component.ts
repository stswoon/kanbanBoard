import {Component} from '@angular/core';
import {strings} from "../../utils/strings"
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  strings = strings;

  constructor(private headerService: HeaderService) {
  }

  getUserEmail(): string {
    return this.headerService.getUserEMail();
  }

  isLoading(): boolean {
    return this.headerService.isLoading();
  }

  logout($event: MouseEvent) {
    this.headerService.logout();
    $event.preventDefault();
  }
}
