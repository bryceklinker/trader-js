import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { welcomeRouting } from './routing/welcome.routing';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        welcomeRouting
    ],
    declarations: [
        WelcomeComponent
    ]
})
export class WelcomeModule {}