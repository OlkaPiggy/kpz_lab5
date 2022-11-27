import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min'
})
export class MathMinPipe implements PipeTransform {

  transform(value: number,value2:number): number {
    return Math.min(value,value2 );
  }

}
