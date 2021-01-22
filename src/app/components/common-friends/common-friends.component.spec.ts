import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFriendsComponent } from './common-friends.component';

describe('CommonFriendsComponent', () => {
  let component: CommonFriendsComponent;
  let fixture: ComponentFixture<CommonFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
