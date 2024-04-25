import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
