import { Component, OnInit } from '@angular/core';
import { StoreService } from './../store.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    constructor(
        public store: StoreService
    ) { }

    ngOnInit() { }

}
