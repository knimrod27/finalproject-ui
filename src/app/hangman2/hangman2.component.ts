import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HangmanServiceService } from '../services/hangman-service.service';
import { HangmanModel } from '../models/hangman.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { HangmanFormComponent } from '../hangman-form/hangman-form.component';



@Component({
  selector: 'app-countries2',
  templateUrl: './hangman2.component.html',
  styleUrl: './hangman2.component.css'
})
export class Hangman2Component implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  words: HangmanModel[] = [];
  displayedColumns: string[] = ['id', 'word', 'category', 'actions'];
  datasource: MatTableDataSource<HangmanModel> = new MatTableDataSource<HangmanModel>();

constructor(private wordsService : HangmanServiceService, private dialogRef: MatDialog) {

}


  ngOnInit(): void {
    this.wordsService.getAll().subscribe(result => {
      this.datasource.data = result.map((element: any) => {
        return {
          id: element.id,
          word: element.word,
          category: element.category
          
        }

      }
      );
    });
    
  }
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }


  
  

  openDialog(word?: HangmanModel) : void {
    console.log('opening dialog');
    const dialogRef = this.dialogRef.open( HangmanFormComponent, {
        width: '500px',
        backdropClass: 'custom-dialog-backdrop-class',
        panelClass: 'custom-dialog-panel-class',
        data: word
      } );

     dialogRef.afterClosed().subscribe(result => {
      console.log('close');
      

      if(result.event === 'submit' && word ) {
          console.log(result.data);
          this.wordsService.updateWord(word.id, result.data).subscribe();
          location.reload();
      } else if(result.event === 'add') {
        this.wordsService.addWord(result.data).subscribe();
          location.reload();
      }

     }
      )
  }

  delete(id: number ) : void {
    this.wordsService.deleteWord(id).subscribe();
    location.reload();
    

  
  }

}
