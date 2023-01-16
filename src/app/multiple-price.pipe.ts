import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplePrice'
})
export class MultiplePricePipe implements PipeTransform {

  transform(value: unknown, ...args: number[]): unknown {
    return args[0]*args[1];
  }

}
