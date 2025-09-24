import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-approval',
  standalone: false,
  templateUrl: './auto-approval.html',
  styleUrl: './auto-approval.scss'
})
export class AutoApproval {
  selectedCategory: string | null = null;

  categories: string[] = [
    'Critical Non-Compliance',
    'Regularly Non-Compliance',
    'Minor Non-Compliance'
  ];

  addedCategories: string[] = [
    'Critical Non-Compliance',
    'Regularly Non-Compliance'
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/setting']);
  }

  addCategory() {
    if (this.selectedCategory && !this.addedCategories.includes(this.selectedCategory)) {
      this.addedCategories.push(this.selectedCategory);
      this.selectedCategory = null;
    }
  }

  removeCategory(index: number) {
    this.addedCategories.splice(index, 1);
  }
}
