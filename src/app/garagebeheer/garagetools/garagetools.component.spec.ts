import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragetoolsComponent } from './garagetools.component';

describe('GaragetoolsComponent', () => {
  let component: GaragetoolsComponent;
  let fixture: ComponentFixture<GaragetoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragetoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
