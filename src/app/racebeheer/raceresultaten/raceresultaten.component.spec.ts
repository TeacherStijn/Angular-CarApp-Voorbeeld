import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceresultatenComponent } from './raceresultaten.component';

describe('RaceresultatenComponent', () => {
  let component: RaceresultatenComponent;
  let fixture: ComponentFixture<RaceresultatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceresultatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceresultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
