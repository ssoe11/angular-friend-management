import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpdatesComponent } from './post-updates.component';

describe('PostUpdatesComponent', () => {
  let component: PostUpdatesComponent;
  let fixture: ComponentFixture<PostUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
