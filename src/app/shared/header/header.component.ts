import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { SharedService } from '../../core/services/shared.service';
import { log } from 'console';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menu: any;
  constructor(
    public authService: AuthService,
    private sharedService: SharedService
  ) {}

  toggleSidebar() {
    this.sharedService.toggleSidebar$.next(
      !this.sharedService.toggleSidebar$.value
    );
  }
}
