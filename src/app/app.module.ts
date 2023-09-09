import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
import { MyphonebookComponent } from './myphonebook/myphonebook.component';
import { SearchPipe } from './phonebook/search.pipe';
import { SortPipe } from './phonebook/sort.pipe';

@NgModule({
  declarations: [
    // AppComponent,
    
    MyphonebookComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyphonebookComponent]
})
export class AppModule { }
