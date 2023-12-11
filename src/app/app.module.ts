import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hangman2Component } from './hangman2/hangman2.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HangmanFormComponent } from './hangman-form/hangman-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Hangman1Component } from './hangman1/hangman1.component';
import {MatIconModule} from '@angular/material/icon';
import { Hangman3Component } from './hangman3/hangman3.component';




@NgModule({
  declarations: [
    AppComponent,
    Hangman2Component,
    HangmanFormComponent,
    Hangman1Component,
    Hangman3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  
    
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
