import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoimagesComponent } from './autoimages.component';

describe('AutoimagesComponent', () => {
  let component: AutoimagesComponent;
  let fixture: ComponentFixture<AutoimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
