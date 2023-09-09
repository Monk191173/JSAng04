import { Component, ElementRef, ViewChild } from '@angular/core';

export interface IcurTask {
  firstName: string,
  lastName: string,
  number: string
}

@Component({
  selector: 'app-myphonebook',
  templateUrl: './myphonebook.component.html',
  styleUrls: ['./myphonebook.component.scss']
})


export class MyphonebookComponent {

  @ViewChild('thf') thf!: ElementRef;
  @ViewChild('thl') thl!: ElementRef;
  @ViewChild('thn') thn!: ElementRef;
  public searchName!: string;
  public firstName!: string;
  public lastName!: string;
  public number!: string;
  public col: string = '';
  public asd: boolean = true;
  public e_mode = false;
  public masContacts: IcurTask[] = [];
  public id: number = -1;
  public phone: RegExp = /\d{10}/
  public addNo = 'addAbon';

  addContact() { this.addNo += ' flex'; this.firstName = ''; this.lastName = ''; this.number = '' }

  fClick(colu: string) {
    this.thf.nativeElement.innerText = 'First Name';
    this.thl.nativeElement.innerText = 'Last Name';
    this.thn.nativeElement.innerText = 'Phone Number';
    let curCol: ElementRef;
    if (this.col != colu) this.asd = true
    else this.asd = !this.asd;
    this.col = colu;
    switch (colu) {
      case 'First Name': curCol = this.thf; break;
      case 'Last Name': curCol = this.thl; break;
      case 'Phone Number': curCol = this.thn; break;
      default: curCol = this.thf;
    }
    if (this.asd) curCol.nativeElement.innerText = colu + ' ▴'
    else curCol.nativeElement.innerText = colu + ' ▾'
  }

  addAbon(firstName: string, lastName: string, number: string) {

    if (firstName == '' || lastName == '') alert('Please fill in all fields !!!')
    else if (!this.phone.test(number)) alert('Phone must have 10 digits !!!')
    else {
      if (this.e_mode) {
        this.masContacts[this.id].firstName = firstName;
        this.masContacts[this.id].lastName = lastName;
        this.masContacts[this.id].number = number;
        this.e_mode = false;
        this.addNo = 'addAbon';
      }
      else {
        if (this.masContacts.some(num => num.number == number)) alert('This phone already present in phonebook !!!')
        else { this.masContacts.push({ firstName: firstName, lastName: lastName, number: number }); this.addNo = 'addAbon'; }
      }
    }
  }

  close(): void {
    this.addNo = 'addAbon';
  }

  editContact(i: number): void {
    this.addNo += ' flex';
    this.firstName = this.masContacts[i].firstName;
    this.lastName = this.masContacts[i].lastName;
    this.number = this.masContacts[i].number;
    this.id = i;
    this.e_mode = true;
  }

  deleteContact(i: number): void { this.masContacts.splice(i, 1); }
}

