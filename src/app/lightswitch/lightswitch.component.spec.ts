import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('vanilla lightComp', () => {
  it('clicked() should toggle isON', () => {
    const component = new LightswitchComponent();
    expect(component.isOn).toBeFalsy();
    component.clicked();
    expect(component.isOn).toBeTruthy();
    component.clicked();
    expect(component.isOn).toBeFalsy();
  });

  fit('message', () => {
    const component = new LightswitchComponent();
    //expect(component.x).toBe(90);
    component.ngOnInit();
    expect(component.x).toBe(90);
    expect(component.message).toBe('The light is Off');
    component.clicked();
    expect(component.message).toBe('The light is On');
  })
});
