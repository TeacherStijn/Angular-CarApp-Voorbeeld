import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceagendaComponent } from './raceagenda.component';

describe('RaceagendaComponent', () => {
  let component: RaceagendaComponent;
  let fixture: ComponentFixture<RaceagendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceagendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
