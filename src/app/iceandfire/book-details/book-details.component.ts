import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { CharacterComponent } from './../character/character.component';
import { StoreService } from './../store.service';
import { IBook } from './../interfaces';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    book: Observable<IBook>;
    characters: Array<string> = [];

    constructor(
        store: StoreService,
        route: ActivatedRoute
    ) {
        const id: string = route.snapshot.params['id'];
        this.book = store.getBook(id);

        this.book.subscribe(
            result => {
                if (result){
                    for (let i = 0; i < result.characters.length; i++) {
                        result.characters[i] = result.characters[i].replace('http://www.anapioficeandfire.com/api/characters/', '');
                    }
                    this.characters = result.characters;
                }
            },
            error => console.error(error)
        );
    }

    ngOnInit() {
    }

}

