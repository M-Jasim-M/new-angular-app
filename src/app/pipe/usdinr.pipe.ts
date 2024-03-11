import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr',
  standalone: true
})
export class UsdinrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
