import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
    selector:'app',
    template:`
        {{timer | async}}
    `
})
export class App{
    timer = Observable.interval(1000);

}

bootstrap(App);