import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordComponent } from '../../../dialogs/reset-password/reset-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  // Open Dialog
  openDialog() {
    this.dialog.open(ResetPasswordComponent, {
      width: '800px',
      autoFocus: false,
      position: {
        top: '50px',
      },
    });
  }

  
}
