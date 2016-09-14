import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let router: Router;

    beforeEach(() => {
        router = getTestBed().get(Router);        
    })

    it('should have get started link', () => {
        const fixture = getTestBed().createComponent(AppComponent);
        const navbar = fixture.nativeElement.querySelector('.navbar');
        const getStartedItem = navbar.querySelectorAll('li')[0]; 
        expect(getStartedItem.innerText).toContain('Get Started');
    });

    it('should go to get started', () => {
        spyOn(router, 'navigate').and.callThrough();

        const fixture = getTestBed().createComponent(AppComponent);
        const navbar = fixture.nativeElement.querySelector('.navbar');
        const getStartedItem = navbar.querySelectorAll('li')[0]; 
        getStartedItem.querySelector('a').click();
        expect(router.navigate).toHaveBeenCalledWith(['/get-started']);
    })

    it('should navigate to welcome', () => {
        spyOn(router, 'navigate').and.callThrough();
        const fixture = getTestBed().createComponent(AppComponent);
        const brandLink = fixture.nativeElement.querySelector('.navbar-brand');
        brandLink.click();
        expect(router.navigate).toHaveBeenCalledWith(['/welcome'])
    })
});