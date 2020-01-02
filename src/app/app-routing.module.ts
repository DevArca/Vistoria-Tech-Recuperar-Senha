import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecuperarSenhaComponent} from '../app/recuperar-senha/recuperar-senha.component'

const routes: Routes = [
  { path: '', component: RecuperarSenhaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
