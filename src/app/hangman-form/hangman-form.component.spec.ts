import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanFormComponent } from './hangman-form.component';

describe('HangmanFormComponent', () => {
  let component: HangmanFormComponent;
  let fixture: ComponentFixture<HangmanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HangmanFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HangmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
