import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-res',
  templateUrl: './sidebar-res.component.html',
  styleUrl: './sidebar-res.component.scss'
})
export class SidebarResComponent {
  minimizeSidebar = false;
  toggleSidebar() {
    this.minimizeSidebar = !this.minimizeSidebar;
  }
}
