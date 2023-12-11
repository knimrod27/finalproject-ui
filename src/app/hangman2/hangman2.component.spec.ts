import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangman2Component } from './hangman2.component';

describe('Hangman2Component', () => {
  let component: Hangman2Component;
  let fixture: ComponentFixture<Hangman2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hangman2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hangman2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
