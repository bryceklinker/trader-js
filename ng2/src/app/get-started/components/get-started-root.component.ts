import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: require('../templates/get-started-root.component.html'),
    styles: [
        require('../styles/get-started-root.component.scss')
    ]
})
export class GetStartedRootComponent {
    constructor(private router: Router) {

    }

    navigate(url: string) {
        this.router.navigate([url]);
    }
}