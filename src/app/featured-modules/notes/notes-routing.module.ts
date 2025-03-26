import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { UpdateNotesComponent } from './update-notes/update-notes.component';

const routes: Routes = [
  {
    path:'',component:NotesComponent,
    children:[
      { path: 'view', component: ShowNotesComponent },
      { path: 'create', component: CreateNotesComponent},
      { path: 'update/:id', component: UpdateNotesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
