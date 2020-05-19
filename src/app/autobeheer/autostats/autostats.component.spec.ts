import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutostatsComponent } from './autostats.component';

describe('AutostatsComponent', () => {
  let component: AutostatsComponent;
  let fixture: ComponentFixture<AutostatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutostatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutostatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
