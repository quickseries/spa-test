import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  TemperatureLogComponent } from './temperature-log.component';

describe('TemeratureLogComponent', () => {
  let component: TemperatureLogComponent;
  let fixture: ComponentFixture<TemperatureLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
