import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // return `name: ${value.toUpperCase()}`;
    return value.toUpperCase();
  }

}
