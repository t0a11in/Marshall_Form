import { NgModule } from '@angular/core';
import { OciFormularioComponent } from './oci-formulario/oci-formulario.component';
import { OciGestionComponent } from './oci-gestion/oci-gestion.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'oci',
    children: [
      {
        path: 'gestion',
        component: OciGestionComponent
      },
      {
        path: ':id/formulario',
        component: OciFormularioComponent
      },
      {
        path: 'formulario',
        component: OciFormularioComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OciRoutingModule { }
