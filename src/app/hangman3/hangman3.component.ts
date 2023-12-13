import { Component, OnInit } from '@angular/core';
import { HangmanServiceService } from '../services/hangman-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hangman3',
  templateUrl: './hangman3.component.html',
  styleUrl: './hangman3.component.css'
})
export class Hangman3Component implements OnInit {
  message: string = '';
  letter: string = '';
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(private hangmansService: HangmanServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  

    makeGuess(): void {
    
      this.hangmansService.guessLetter(this.letter).subscribe(
        (response) => {
          console.log('Response from server:', response);
          this.message = response;
        },
        (error) => {
          console.error('Error making a guess:', error);
          this.message = 'Game over. Start a new game.';
        }
      );
    }
  
    makeGuessWithParam(selectedLetter: string): void {
      this.letter = selectedLetter;
      this.makeGuess();
    }
  
  restartGame(): void {
    this.router.navigate(['hangman/play']); 
  }
}
 
