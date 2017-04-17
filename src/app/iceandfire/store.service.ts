import { Injectable } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs/Rx';

import { ApiService } from './api.service';
import { IBook, ICharacter } from './interfaces';

@Injectable()
export class StoreService {
    _books: BehaviorSubject<Array<IBook>>;
    _book: BehaviorSubject<IBook>;
    _characters: BehaviorSubject<Array<ICharacter>>;

    _booksSub: Subscription;
    _charactersSub: Subscription;

    constructor(
        private api: ApiService
    ) {
        this._books = new BehaviorSubject([]);
        this._book = new BehaviorSubject(null);
        this._characters = new BehaviorSubject([]);
    }

    getBooks = (): BehaviorSubject<Array<IBook>> => {
        if (this._books.getValue().length <= 0 && !this._booksSub) {
            this._booksSub = this.api.getBooks().subscribe(
                result => {
                    result.forEach(item => {
                        const urlArray = item.url.split('/');
                        item.id = urlArray[urlArray.length - 1];
                    });
                    this._books.next(result);
                    this._booksSub.unsubscribe();
                },
                error => console.error(error)
            );
        }

        return this._books;
    }

    getBook = (id: string): BehaviorSubject<IBook> => {
        const book = this._books.getValue().find(item => {
            return item.id === id;
        });

        if (book) {
            this._book.next(book);
        } else {
            const sub = this.api.getBook(id).subscribe(
                result => {
                    const urlArray = result.url.split('/');
                    result.id = urlArray[urlArray.length - 1];

                    this._book.next(result);
                    sub.unsubscribe();
                },
                error => console.error(error)
            );
        }

        return this._book;
    }

    // Currently broken. API only returns ~8 characters
    getCharacters = (): BehaviorSubject<Array<ICharacter>> => {
        if (this._characters.getValue().length <= 0 && !this._charactersSub) {
            this._charactersSub = this.api.getCharacters().subscribe(
                result => {
                    result.forEach(item => {
                        const urlArray = item.url.split('/');
                        item.id = urlArray[urlArray.length - 1];
                    });
                    this._characters.next(result);
                    this._charactersSub.unsubscribe();
                },
                error => console.error(error)
            );
        }

        return this._characters;
    }

    getCharacter = (id: string): BehaviorSubject<ICharacter> => {
        const returnResult: BehaviorSubject<ICharacter> = new BehaviorSubject(null);

        const character = this._characters.getValue().find(item => {
            return item.id === id;
        });

        if (character) {
            returnResult.next(character);
        } else {
            const sub = this.api.getCharacter(id).subscribe(
                result => {
                    const urlArray = result.url.split('/');
                    result.id = urlArray[urlArray.length - 1];

                    returnResult.next(result);

                    const characters = this._characters.getValue();
                          characters.push(result);
                    this._characters.next(characters);

                    sub.unsubscribe();
                },
                error => console.error(error)
            );
        }

        return returnResult;
    }

}
