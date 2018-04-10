import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable()
export class MasterService {

  constructor(private value: ValueService) { }

  getValue() {
    return this.value.getValue();
  }

}
