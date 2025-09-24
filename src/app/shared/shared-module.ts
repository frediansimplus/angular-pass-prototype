import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material/material-module';
import { TopNav } from './components/top-nav/top-nav';
import { SideNav } from './components/side-nav/side-nav';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';
import { OverlayContainer } from './components/overlay-container/overlay-container';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { Highlight } from './directives/highlight';
import { StringNormalizePipe } from './pipes/string-normalize-pipe';

@NgModule({
  declarations: [
    TopNav,
    SideNav,
    LoadingSpinner,
    OverlayContainer,
    Highlight,
    CapitalizePipe,
    StringNormalizePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SideNav,
    LoadingSpinner,
    Highlight,
    CapitalizePipe,
    StringNormalizePipe,
  ]
})
export class SharedModule { }
