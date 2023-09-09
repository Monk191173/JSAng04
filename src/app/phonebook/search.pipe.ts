import { Pipe, PipeTransform } from '@angular/core';
import { IcurTask } from '../myphonebook/myphonebook.component';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(mas: IcurTask[], value: string,): IcurTask[] {
    if (!mas) return [];
    if (!value) return mas;
    return mas.filter(a => a.firstName.includes(value) || a.lastName.includes(value) || a.number.includes(value))
  }

}
