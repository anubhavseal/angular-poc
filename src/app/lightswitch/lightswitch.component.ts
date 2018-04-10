import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lightswitch-comp',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class LightswitchComponent implements OnInit{
  isOn = false;
  x
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  ngOnInit() {
    this.x = 90;
  }
}
