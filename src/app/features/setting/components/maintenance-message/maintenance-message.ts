import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-message',
  standalone: false,
  templateUrl: './maintenance-message.html',
  styleUrl: './maintenance-message.scss'
})
export class MaintenanceMessage {
  message: string = '';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/setting']);
  }

  clearMessage() {
    this.message = '';
  }

  saveMessage() {
    console.log('Saved message:', this.message);
    // TODO: Call API to save message
  }
}
