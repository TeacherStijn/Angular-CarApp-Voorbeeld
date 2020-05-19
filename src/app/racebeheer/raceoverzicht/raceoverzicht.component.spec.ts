import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceoverzichtComponent } from './raceoverzicht.component';

describe('RaceoverzichtComponent', () => {
  let component: RaceoverzichtComponent;
  let fixture: ComponentFixture<RaceoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
