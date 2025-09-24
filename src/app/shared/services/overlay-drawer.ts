import { Injectable, Injector, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { OverlayContainer } from '../components/overlay-container/overlay-container';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayRef: OverlayRef | null = null;

  constructor(private overlay: Overlay, private injector: Injector) { }

  /**
   * Opens the overlay with dynamic content.
   * @param content The content to display, which can be a TemplateRef or a Component class.
   */
  open(content: TemplateRef<any> | any, dismissableMask: boolean): OverlayRef {
    // 1. Create the overlay
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true, // A semi-transparent background behind the overlay
      backdropClass: 'cdk-overlay-dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),

      // Use a custom position strategy to align the overlay
      positionStrategy: this.overlay.position().global()
        .right('0px') // Aligns the right edge of the overlay with the right edge of the screen
        .top('0px'), // Aligns the top edge of the overlay with the top edge of the screen
      
      height: '100vh', // Set the height to fill the viewport
    });

    this.overlayRef = this.overlay.create(overlayConfig);

    // 2. Attach the content to the overlay
    if (content instanceof TemplateRef) {
      // Use a custom container component to host the template
      const portal = new ComponentPortal(OverlayContainer, null, this.injector);
      const componentRef = this.overlayRef.attach(portal);

      // Pass the TemplateRef to the container component
      componentRef.instance.contentTemplate = content;
    } else {
      // Assuming content is a Component class
      const portal = new ComponentPortal(content, null, this.injector);
      this.overlayRef.attach(portal);
    }

    // 3. Close the overlay when the backdrop is clicked
    if (dismissableMask) {
      this.overlayRef.backdropClick().subscribe(() => this.close());
    }

    return this.overlayRef;
  }

  /**
   * Closes the current overlay.
   */
  close(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}