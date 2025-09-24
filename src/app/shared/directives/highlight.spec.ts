import { Component, DebugElement } from '@angular/core';
import { Highlight } from './highlight';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


// Test Host Component to apply the directive
@Component({
  template: `
    <p appHighlight="red">Highlight Me Red</p>
    <p appHighlight>Highlight Me Default</p>
    <p>No Highlight</p>
  `
})
class TestHostComponent {}


describe('Highlight', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let elementsWithDirective: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, Highlight], // Declare both host and directive
    });
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges(); // Initial binding

    // Find all elements with the HighlightDirective
    elementsWithDirective = fixture.debugElement.queryAll(By.directive(Highlight));
  });

  it('should have two elements with the directive', () => {
    expect(elementsWithDirective.length).toBe(2);
  });

  
  it('should highlight the first element with red on mouseenter', () => {
    const redHighlightEl = elementsWithDirective[0];
    redHighlightEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(redHighlightEl.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should clear highlight on mouseleave for the first element', () => {
    const redHighlightEl = elementsWithDirective[0];
    redHighlightEl.triggerEventHandler('mouseenter', null); // Highlight first
    fixture.detectChanges();
    expect(redHighlightEl.nativeElement.style.backgroundColor).toBe('red');

    redHighlightEl.triggerEventHandler('mouseleave', null); // Then clear
    fixture.detectChanges();
    expect(redHighlightEl.nativeElement.style.backgroundColor).toBe('');
  });

  it('should highlight the second element with default yellow on mouseenter', () => {
    const defaultHighlightEl = elementsWithDirective[1];
    defaultHighlightEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(defaultHighlightEl.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should clear highlight on mouseleave for the second element', () => {
    const defaultHighlightEl = elementsWithDirective[1];
    defaultHighlightEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(defaultHighlightEl.nativeElement.style.backgroundColor).toBe('yellow');

    defaultHighlightEl.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(defaultHighlightEl.nativeElement.style.backgroundColor).toBe('');
  });
});
