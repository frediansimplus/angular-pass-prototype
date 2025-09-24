import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav {

  protected readonly device = computed<String | null>(() => { return 'desktop';});
  protected readonly isMobile = computed(() => this.device() === 'mobile');
  protected readonly isTablet = computed(() => this.device() === 'tablet');
}
