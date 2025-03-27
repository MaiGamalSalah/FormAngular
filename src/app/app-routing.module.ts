import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path:'',component:NavbarComponent
  }
  ,
  {
    path:'notes',loadChildren:()=>
      import('./featured-modules/notes/notes.module').then(m=>m.NotesModule)
  }
  ,
  {
    path:'products',loadChildren:()=>
      import('./featured-modules/products/products.module').then(m=>m.ProductsModule)

    },
    {
      path:'**',component:NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
