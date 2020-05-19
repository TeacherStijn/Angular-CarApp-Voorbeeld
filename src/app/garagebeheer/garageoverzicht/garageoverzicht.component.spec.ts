import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageoverzichtComponent } from './garageoverzicht.component';

describe('GarageoverzichtComponent', () => {
  let component: GarageoverzichtComponent;
  let fixture: ComponentFixture<GarageoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
