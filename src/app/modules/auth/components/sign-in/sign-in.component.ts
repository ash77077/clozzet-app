import { Component, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Password } from 'primeng/password';
import { InputText } from 'primeng/inputtext';
import { AuthService } from '../../auth.service';
import { IUser } from '../../../../core/models/user.model';
import { EUserRole } from '../../../../core/enums/user-role.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [Button, Password, FormsModule, InputText, ReactiveFormsModule],
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login(): void {
    this.authService.login(this.signInForm.value).subscribe((user: IUser): void => {
      if (user?.role) {
        if (user.role === EUserRole.ADMIN) {
          this.router.navigateByUrl('dashboard');
        } else {
          this.router.navigateByUrl('/admin');
        }
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  onEnter(event: any): void {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}
