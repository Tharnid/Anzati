# NgArchitecture

RxJS Subject

- Subject to Observable
- Can multicast
- Like EventEmitters

RxJS BehaviorSubject

- also observable

- Subject all other observers will get recent value emitted
- last emitted 

Container

Smart and Fetches data

Presentation

Dumb and displays data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

Renaming local branches
https://stackoverflow.com/questions/6591213/how-do-i-rename-a-local-git-branch

ng s -o

ng g c todos

ng generate module users --route users --module app
ng generate library ng-shared
ng build ng-shared --watch
ng generate component users/users-display
ng generate service data

ng generate pipe my-uppercase
ng generate pipe users/my-uppercase -SkipTests=true


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
