import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatchHistoryComponent } from './profile-match-history.component';

describe('ProfileMatchHistoryComponent', () => {
  let component: ProfileMatchHistoryComponent;
  let fixture: ComponentFixture<ProfileMatchHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMatchHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileMatchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
