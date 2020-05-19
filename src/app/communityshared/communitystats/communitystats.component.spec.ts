import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitystatsComponent } from './communitystats.component';

describe('CommunitystatsComponent', () => {
  let component: CommunitystatsComponent;
  let fixture: ComponentFixture<CommunitystatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitystatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitystatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
