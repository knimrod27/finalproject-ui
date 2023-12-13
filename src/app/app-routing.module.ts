import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hangman2Component } from './hangman2/hangman2.component';
import { Hangman1Component } from './hangman1/hangman1.component';
import { Hangman3Component } from './hangman3/hangman3.component';

const routes: Routes = [
  {path: 'hangman', component: Hangman2Component
} ,
{path: 'hangman/play', component: Hangman1Component
} ,
{
  path: 'hangman/guess', component: Hangman3Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

