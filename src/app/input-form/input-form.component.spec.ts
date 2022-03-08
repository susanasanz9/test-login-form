import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputFormComponent } from './input-form.component';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInput should set a value', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    component.value = 'blah';
    fixture.detectChanges();
    input.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      expect(input.value).toBe('blah');
    });
  });
});
