import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageautosComponent } from './garageautos.component';

describe('GarageautosComponent', () => {
  let component: GarageautosComponent;
  let fixture: ComponentFixture<GarageautosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageautosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
