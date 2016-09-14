import { getTestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('Welcome', () => {
    it('should have link to get started', () => {
        const fixture = getTestBed().createComponent(WelcomeComponent);
        expect(fixture.nativeElement.querySelector('.get-started-link')).toBeTruthy();
    });

    it('should display jumbo tron', () => {
        const fixture = getTestBed().createComponent(WelcomeComponent);
        expect(fixture.nativeElement.querySelector('.jumbotron')).toBeTruthy();
    });
});