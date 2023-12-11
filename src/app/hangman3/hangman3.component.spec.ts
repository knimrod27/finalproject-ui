import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangman3Component } from './hangman3.component';

describe('Hangman3Component', () => {
  let component: Hangman3Component;
  let fixture: ComponentFixture<Hangman3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hangman3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hangman3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
