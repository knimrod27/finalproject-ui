import { Component, OnInit } from '@angular/core';
import { HangmanServiceService } from '../services/hangman-service.service';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-hangman1',
  templateUrl: './hangman1.component.html',
  styleUrl: './hangman1.component.css'
})


export class Hangman1Component implements OnInit {
  message: string = '';
  categories: string[] = ['animals', 'countries', 'fruits'];
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  constructor(private hangmansService: HangmanServiceService, private router: Router) {}

  ngOnInit(): void {
  
  }

  selectCategory(category: any): void {
    this.startGameWithCategory(category);
    this.router.navigate(['hangman/guess']);
  }

  private startGameWithCategory(category: any): void {
    this.hangmansService.startGame(category).subscribe(
      (response) => {
        console.log('Response from server:', response);
        this.message = response;
      },
      (error) => {
        console.error('Error starting the game:', error);
        this.message = 'Error starting the game. Please try again.';
      }
    );
  }

 
 
}

