import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemplepdfComponent } from './modules/exemplepdf/exemplepdf.component';

const routes: Routes = [
  {
    path: '',
    component: ExemplepdfComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }