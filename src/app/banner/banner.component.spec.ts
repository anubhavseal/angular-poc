import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('BannerComponent', () => {
  let fixture: ComponentFixture<BannerComponent>;
  let component: BannerComponent;
  let divDe: DebugElement, h1De: DebugElement;
  let h1El: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[BannerComponent]
    });
  });

  it('Banner Component title should be displayed properly', () => {
    let a: HTMLElement;
    a.dispatchEvent
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    divDe = fixture.debugElement;
    console.log(divDe.nativeElement);
    h1De = divDe.query(By.css('h1'));
    h1El = h1De.nativeElement;
    fixture.detectChanges();
    expect(h1El.textContent).toBe('Test Tour of Heroes');
    expect(component).toBeDefined();
  })
});
