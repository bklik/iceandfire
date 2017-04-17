import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IBook, ICharacter } from './interfaces';

@Injectable()
export class ApiService {

    private apiUri = 'http://www.anapioficeandfire.com/api/';

    constructor(private http: Http) { }

    public getBooks = (): Observable<Array<IBook>> => {
        return this.http.get(this.apiUri + 'books')
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getBook = (id: string): Observable<IBook> => {
        return this.http.get(this.apiUri + 'books/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getCharacters = (): Observable<Array<ICharacter>> => {
        return this.http.get(this.apiUri + 'characters')
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public getCharacter = (id: string): Observable<ICharacter> => {
        return this.http.get(this.apiUri + 'characters/' + id)
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
