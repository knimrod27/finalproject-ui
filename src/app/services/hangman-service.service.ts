import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HangmanModel } from '../models/hangman.model';

@Injectable({
  providedIn: 'root'
})
export class HangmanServiceService {
  url = 'http://localhost:8080/hangman';

  constructor(private httpClient : HttpClient) {  }

  getAll(): Observable<any> {
     return this.httpClient.get(this.url);
     
  }

  updateWord(id: number, requestBody: HangmanModel): Observable<any> {
    return this.httpClient.patch(this.url + '/' + id, requestBody);

  }


  deleteWord(id: number) : Observable<any> {
    return this.httpClient.delete(this.url+ '/' + id);
  }


  addWord(word: HangmanModel) : Observable<any> {
    return this.httpClient.post(this.url, word);
  }


  startGame(category: any) : Observable<any> {
    return this.httpClient.get<any>(this.url + '/play/' + category, {responseType: 'text' as 'json'});
  }


  guessLetter(letter: string): Observable<any> {
    return this.httpClient.get<string>(this.url + '/guess/' + letter, {responseType: 'text' as 'json'});
  }
  

}


