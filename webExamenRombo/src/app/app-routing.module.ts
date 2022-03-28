import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProspectoFormComponent } from './component/prospecto-form/prospecto-form.component';
import { ProspectoListComponent } from './component/prospecto-list/prospecto-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/prospecto',
    pathMatch:'full'
  },
  {
    path:'prospecto',
    component: ProspectoListComponent
  }
  ,
  {
    path:'prospecto/Add/:id',
    component: ProspectoFormComponent
  },
  {
    path:'prospecto/Edit/:id',
    component: ProspectoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
