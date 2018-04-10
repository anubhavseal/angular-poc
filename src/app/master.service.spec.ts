import { TestBed, inject } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { HeroService } from './hero.service';

fdescribe('MasterService', () => {
  let master: MasterService;
  let value: jasmine.SpyObj <HeroService>
  beforeEach(() => {
    const spy  = jasmine.createSpyObj(['getValue']);
    TestBed.configureTestingModule({
      providers: [MasterService,
      { provide: ValueService, useValue: spy }]
    });

    master = TestBed.get(MasterService);
    value = TestBed.get(ValueService);
    console.log(value)
  });

  it('should be created', inject([MasterService], (service: MasterService) => {
    expect(service).toBeTruthy();
  }));
});


describe("Test Master Service without Angular", () => {
  let master: MasterService;
  beforeEach(() => {
    master = new MasterService(new ValueService());
  });

  it('master should return real value from get value', () => {
    expect(master.getValue()).toBeDefined();
    expect(master.getValue()).toBe('real value');
  })

  it('using spy master should return real value from get value', () => {
    expect(master.getValue()).toBeDefined();
    let stub = 'real value';
    const valueServiceSpy = jasmine.createSpyObj( ['getValue']);
    valueServiceSpy.getValue.and.returnValue(stub);
    master = new MasterService(valueServiceSpy);
    console.log(valueServiceSpy);
    expect(master.getValue()).toBe('real value');
  })
})