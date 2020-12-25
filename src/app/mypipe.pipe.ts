import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value){
      return null;
    }
    return value.substring(value.lastIndexOf(' ') + 1)
  }

}
