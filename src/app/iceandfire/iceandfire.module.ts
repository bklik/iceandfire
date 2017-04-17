import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';
import { IBook } from './interfaces';

import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const appRoutes = [
    {path: 'list', component: BookListComponent},
    {path: 'book/:id', component: BookDetailsComponent},
    {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        BookComponent,
        HouseComponent,
        CharacterComponent,
        BookListComponent,
        BookDetailsComponent,
    ],
    exports: [
        BookComponent,
        HouseComponent,
        CharacterComponent,
        BookListComponent
    ],
    providers: [
        ApiService,
        StoreService
    ]
})
export class IceandfireModule { }
