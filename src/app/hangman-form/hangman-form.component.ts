import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HangmanModel } from '../models/hangman.model';

@Component({
  selector: 'app-country-form',
  templateUrl: './hangman-form.component.html',
  styleUrl: './hangman-form.component.css'
})
export class HangmanFormComponent implements OnInit {
wordForm = new FormGroup({
  word: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  
});

currentWord: HangmanModel;

constructor(public dialogRef: MatDialogRef<HangmanFormComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) data : any
  ) {
    this.currentWord =data;



}
  ngOnInit(): void {
    this.wordForm.controls.word.setValue(this.currentWord.word);
    this.wordForm.controls.category.setValue(this.currentWord.category);
    

    
  }

  onSubmit(): void {
    const updatedWord = {
      word: this.wordForm.controls.word.getRawValue(),
      category: this.wordForm.controls.category.getRawValue(),
      

    }

    
    if(this.currentWord) {
      this.dialogRef.close({ event: "submit", data: updatedWord });
    } else {
      this.dialogRef.close({ event : 'add', data: updatedWord});

    }
     


  }

  cancel(): void {
    this.dialogRef.close();
  }

}
