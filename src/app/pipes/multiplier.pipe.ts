import { Pipe, PipeTransform } from '@angular/core';
import {interval, Observable, timer} from "rxjs";

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number, arg2: any): Observable<any> {
    return interval(value * arg2);
    // return '10';
  }

}
