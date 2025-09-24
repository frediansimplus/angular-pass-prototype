import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  showForm = false;

  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  toggleForm() {
    this.showForm = true;
  }

  onLogin() {
    // For prototype: just redirect to dashboard
    this.router.navigate(['/dashboard']);
  }
}
