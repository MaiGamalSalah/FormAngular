import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { NotesComponent } from './notes/notes.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CreateNotesComponent,
    NotesComponent,
    ShowNotesComponent,
    UpdateNotesComponent,
   
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NotesModule { }
