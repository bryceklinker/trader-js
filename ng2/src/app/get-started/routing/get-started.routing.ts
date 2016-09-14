import { RouterModule } from '@angular/router';

import { GetStartedRootComponent } from '../components/get-started-root.component';
import { WhatsIncludedComponent } from '../whats-included/components/whats-included.component';
import { UnitTestsComponent } from '../unit-tests/components/unit-tests.component';
import { EndToEndComponent } from '../end-to-end/components/end-to-end.component';
import { BundlingComponent } from '../bundling/components/bundling.component';
import { StartComponent } from '../start/components/start.component';

export const getStartedRouting = RouterModule.forChild([
    { 
        path: 'get-started', 
        component: GetStartedRootComponent,
        pathMatch: 'prefix',
        children: [
            { path: 'whats-included', component: WhatsIncludedComponent },
            { path: 'unit-tests', component: UnitTestsComponent },
            { path: 'end-to-end', component: EndToEndComponent },
            { path: 'bundling', component: BundlingComponent },
            { path: 'start', component: StartComponent },
            { path: '', redirectTo: '/get-started/whats-included' }
        ]
    }
]);