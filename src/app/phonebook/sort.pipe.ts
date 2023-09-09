import { Pipe, PipeTransform } from '@angular/core';
import { IcurTask } from '../myphonebook/myphonebook.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(mas: IcurTask[], value: string, asd: boolean): IcurTask[] {
    if (!mas) return [];
    if (!value) return mas;

    switch (value) {
      case 'First Name':
        if (asd) return mas.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0));
        else return mas.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0));
        break;
      case 'Last Name':
        if (asd) return mas.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0));
        else return mas.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1 : 0));
        break;
      case 'Phone Number':
        if (asd) return mas.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0));
        else return mas.sort((a, b) => (a.number < b.number) ? 1 : ((a.number > b.number) ? -1 : 0));
        break;
      default: { return mas }
    }
  }

}
