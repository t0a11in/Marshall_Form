import { Component, Input, OnInit } from '@angular/core';
import { OciDetalle } from 'src/app/model/oci-detalle.model';

@Component({
  selector: 'app-oci-detalle-tabla',
  templateUrl: './oci-detalle-tabla.component.html',
  styleUrls: ['./oci-detalle-tabla.component.scss']
})
export class OciDetalleTablaComponent implements OnInit {

  @Input() ociDetalle: OciDetalle[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
