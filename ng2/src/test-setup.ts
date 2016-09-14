Error.stackTraceLimit = Infinity;

import './vendor';

require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

import { NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { provideRoutes } from '@angular/router';

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppModule } from './app'
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routing';

@NgModule({
    imports: [AppModule, BrowserDynamicTestingModule, RouterTestingModule],
    providers: [
        { provide: XHRBackend, useClass: MockBackend },
        provideRoutes(appRoutes)
    ]
})
class TestingModule { }

describe('{{Your App Name Here}}', () => {
    let testBed: TestBed;
    beforeAll(() => {
        const base = document.createElement('base');
        base.setAttribute('href', '/');
        document.head.appendChild(base);
        
        TestBed.initTestEnvironment(TestingModule, platformBrowserDynamicTesting());
    });

    const context = (<any>require).context('.', true, /\.spec\.ts$/);
    context.keys().forEach(context);
});