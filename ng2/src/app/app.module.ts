import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { GetStartedModule } from './get-started';
import { WelcomeModule } from './welcome';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        appRouting,
        GetStartedModule,
        WelcomeModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    
}