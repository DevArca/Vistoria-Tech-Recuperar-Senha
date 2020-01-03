import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecuperarSenhaComponent} from '../app/recuperar-senha/recuperar-senha.component'
import { ConfirmacaoComponent } from '../app/confirmacao/confirmacao.component'
import { LinkExpiradoComponent } from '../app/link-expirado/link-expirado.component'

const routes: Routes = [
  { path: '', component: RecuperarSenhaComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: 'link-expirado', component: LinkExpiradoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
