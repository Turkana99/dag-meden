import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainComponent } from './components/main/main.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MaterialModule } from '../material.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarResComponent } from '../shared/sidebar-res/sidebar-res.component';

@NgModule({
  declarations: [
    CabinetComponent,
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarResComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
    ToastModule,
    ButtonModule,
    MaterialModule,
    MatMenuModule,
    InputTextModule,
    AccordionModule
  ],
  providers: [
    
  ],
})
export class CabinetModule {}
