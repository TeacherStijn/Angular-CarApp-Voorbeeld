import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityexportsComponent } from './communityexports.component';

describe('CommunityexportsComponent', () => {
  let component: CommunityexportsComponent;
  let fixture: ComponentFixture<CommunityexportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityexportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityexportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
