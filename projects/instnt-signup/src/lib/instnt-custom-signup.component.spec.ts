import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstntCustomSignupComponent } from './instnt-custom-signup.component';

describe('InstntCustomSignupComponent', () => {
  let component: InstntCustomSignupComponent;
  let fixture: ComponentFixture<InstntCustomSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstntCustomSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstntCustomSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
