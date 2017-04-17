import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { IceandfireModule, appRoutes } from './iceandfire/iceandfire.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpModule,
        IceandfireModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
