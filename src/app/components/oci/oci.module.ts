import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OciGestionComponent } from './oci-gestion/oci-gestion.component';
import { OciFormularioComponent } from './oci-formulario/oci-formulario.component';
import { OciRoutingModule } from './oci-routing.module';
import { DataTablesModule } from 'angular-datatables';
// import { DetalleCompraComponent } from '../../shared/detalle-compra/detalle-compra.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SubComponentesModule } from '../../sub-componentes/sub-componentes.module';

@NgModule({
  declarations: [
    OciGestionComponent,
    OciFormularioComponent,
  ],
  imports: [
    // DetalleCompraComponent,
    OciRoutingModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SubComponentesModule
  ]
})
export class OciModule { }
