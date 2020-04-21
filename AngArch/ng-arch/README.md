# NgArch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

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
## Useful Commands

ng server --open

ng g c todos --dry-run // lets you see what files will be generated

ng g module users --route users --module app

SRP (Single Responsibility Priciple)

- Rule of one
- Small functions

Naming

- Use consistent names for all symbols
_ uses dashes to separate 
- use consistent names for all assets name after what they represent
- uses consistent names for all services named after their feature

Locate
Identify
Flat folder structure
Try to be dry

Convention-Based -  Components, Services all in one folder

Feature-Based - All files in same area in the same folder

Users will be lazily loaded when we go to users route

ul>li*2

shared module

ng g module shared/material --flat --dry-run 

ng add @angular/material

