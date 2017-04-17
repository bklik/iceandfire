import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { ICharacter } from './../interfaces';
import { StoreService } from './../store.service';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
    @Input() id: string = '';
    character: ICharacter;

    constructor(
        private store: StoreService
    ) { }

    ngOnInit() {
        this.store.getCharacter(this.id).subscribe(
            result => {
                if(result){
                    this.character = result;
                }
            },
            error => console.error(error)
        );
    }

}