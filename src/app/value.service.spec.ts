import { TestBed, inject } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
    console.log(TestBed.get(ValueService))
  });

  fit('should be created', inject([ValueService], (service: ValueService) => {
    expect(service).toBeTruthy();
    
  }));
});

describe('vanilla jasmine',() => {
  let service: ValueService;
  beforeEach(() => {
    service = new ValueService();
  });

  it('value service should be defined', () => {
    expect(service).toBeDefined();
  })

  it('should return an observable', (done: DoneFn) => {
    service.getObservable().subscribe((value) => {
      expect(value).toBe(42);
      done();
    })
  })
})
