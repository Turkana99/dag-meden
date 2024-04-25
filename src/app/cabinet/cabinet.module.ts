import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetRoutingModule } from './cabinet-routing.module';
import { CabinetComponent } from './cabinet.component';
import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    CabinetComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CabinetRoutingModule,
   
  ],
  providers: [
  ],
})
export class CabinetModule {}
