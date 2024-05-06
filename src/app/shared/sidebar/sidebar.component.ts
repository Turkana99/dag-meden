import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../core/services/shared.service';
import { log } from 'console';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  minimizeSidebar = false;
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.onSidebarToggle();
  }
  onSidebarToggle() {
    this.sharedService.toggleSidebar$.subscribe((data) => {
      this.minimizeSidebar = data;
      console.log(this.minimizeSidebar);
    });
  }
}
