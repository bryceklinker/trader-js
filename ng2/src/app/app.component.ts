import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent  {
    constructor(private router: Router) {

    }

    navigate(url: string) {
        this.router.navigate([url]);
    }
}