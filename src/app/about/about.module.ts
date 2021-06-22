import {NgModule} from '@angular/core';  // para ciração de modulos.
import {RouterModule, Routes} from '@angular/router';  // permite criação de rotas.

import {AboutComponent} from './about.component';

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations:[AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule {}
