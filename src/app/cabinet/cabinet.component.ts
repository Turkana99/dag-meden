import { Component, OnInit } from '@angular/core';
import { SharedService } from '../core/services/shared.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss',
})
export class CabinetComponent implements OnInit {
  isOpen = true;
  minimizeSidebar = false;
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.onSidebarToggle();
  }
  onSidebarToggle() {
    this.sharedService.toggleSidebar$.subscribe((data) => {
      this.minimizeSidebar = data;
      console.log("cabinet",this.minimizeSidebar);
    });
  }
}
