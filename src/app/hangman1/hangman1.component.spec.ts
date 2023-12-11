import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangman1Component } from './hangman1.component';

describe('Hangman1Component', () => {
  let component: Hangman1Component;
  let fixture: ComponentFixture<Hangman1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hangman1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hangman1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
