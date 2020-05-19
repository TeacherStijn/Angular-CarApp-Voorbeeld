import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityoverzichtComponent } from './communityoverzicht.component';

describe('CommunityoverzichtComponent', () => {
  let component: CommunityoverzichtComponent;
  let fixture: ComponentFixture<CommunityoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
