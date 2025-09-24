import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-container',
  standalone: false,
  templateUrl: './overlay-container.html',
  styleUrl: './overlay-container.scss'
})
export class OverlayContainer implements OnInit {
  @Input() contentTemplate: any;

  constructor() { }

  ngOnInit(): void { }

}
