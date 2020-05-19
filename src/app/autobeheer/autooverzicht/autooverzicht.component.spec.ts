import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutooverzichtComponent } from './autooverzicht.component';

describe('AutooverzichtComponent', () => {
  let component: AutooverzichtComponent;
  let fixture: ComponentFixture<AutooverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutooverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutooverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
