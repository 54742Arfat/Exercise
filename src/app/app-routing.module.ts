import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from './comp/comp.component';
import { Parent2Component } from './comp1/comp1.component';

const routes: Routes = [
  { path: "", component: Parent1Component },
  { path: "parent2", component: Parent2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
