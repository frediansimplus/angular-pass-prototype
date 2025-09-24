import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-list',
  standalone: false,
  templateUrl: './setting-list.html',
  styleUrl: './setting-list.scss'
})
export class SettingList {
  pushEnabled = new FormControl(true);
  selectedInterval = 'Hourly';

  constructor(private router: Router) {}

  setInterval(interval: string) {
    this.selectedInterval = interval;
    console.log('Interval set to:', interval);
  }

  openMaintenanceDialog() {
    console.log('Open Maintenance Message dialog');
    this.router.navigate(['/setting/maintenance-message']);
  }

  openAutoApprovalDialog() {
    console.log('Open Auto Approval dialog');
    this.router.navigate(['/setting/auto-approval']);
  }
}
