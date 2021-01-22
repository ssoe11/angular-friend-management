import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkUpFriendsComponent } from './link-up-friends.component';

describe('LinkUpFriendsComponent', () => {
  let component: LinkUpFriendsComponent;
  let fixture: ComponentFixture<LinkUpFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkUpFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkUpFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
