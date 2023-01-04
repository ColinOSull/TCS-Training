import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    if(value.length > 20) {
      return value.substring(0,20) + '.....';
    } else return value;
  }

}
