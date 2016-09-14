import { RouterModule } from '@angular/router';

import { WelcomeComponent } from '../components/welcome.component';

export const welcomeRouting = RouterModule.forChild([
    { path: 'welcome', component: WelcomeComponent }
])