import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { getStartedRouting } from './routing/get-started.routing';
import { GetStartedRootComponent } from './components/get-started-root.component';
import { WhatsIncludedComponent } from './whats-included/components/whats-included.component';
import { BundlingComponent } from './bundling/components/bundling.component';
import { EndToEndComponent } from './end-to-end/components/end-to-end.component';
import { UnitTestsComponent } from './unit-tests/components/unit-tests.component';
import { StartComponent } from './start/components/start.component';

@NgModule({
    imports: [
        BrowserModule,
        getStartedRouting
    ],
    declarations: [
        GetStartedRootComponent,
        WhatsIncludedComponent,
        UnitTestsComponent,
        EndToEndComponent,
        BundlingComponent,
        StartComponent
    ]
})
export class GetStartedModule {

}