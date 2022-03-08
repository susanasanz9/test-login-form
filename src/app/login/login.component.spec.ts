import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    expect(component.innerWidth).not.toBe(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('empty form should be created', () => {
    const loginForm = component.loginForm;
    const mockeLoginForm = {
      email: '',
      password: '',
      remember: true
    }
    expect(loginForm.value).toEqual(mockeLoginForm);
  });

  it('should trigger onResize method when window is resized', () => {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });
});
