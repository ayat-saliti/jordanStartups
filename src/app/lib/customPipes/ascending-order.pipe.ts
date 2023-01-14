import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascendingOrder'
})
export class AscendingOrderPipe implements PipeTransform {
  ascending! : string;
  transform(value: any, ...args: unknown[]): unknown {
    return(this.ascending = value.sortBy().ascending());
  }

}

