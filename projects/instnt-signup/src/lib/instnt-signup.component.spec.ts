import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstntSignupComponent } from './instnt-signup.component';

describe('InstntSignupComponent', () => {
  let component: InstntSignupComponent;
  let fixture: ComponentFixture<InstntSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstntSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstntSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
