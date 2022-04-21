import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OciDetalleComponent } from './components/oci-detalle/oci-detalle.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OciDetalleTablaComponent } from './components/oci-detalle-tabla/oci-detalle-tabla.component';



@NgModule({
  declarations: [
    OciDetalleComponent,
    OciDetalleTablaComponent
  ],
  imports: [
    NgSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    OciDetalleComponent,
    OciDetalleTablaComponent

  ]
})
export class SubComponentesModule { }
