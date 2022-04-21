import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente.model';
import { OciDetalle } from 'src/app/model/oci-detalle.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-oci-formulario',
  templateUrl: './oci-formulario.component.html',
  styleUrls: ['./oci-formulario.component.scss']
})
export class OciFormularioComponent implements OnInit {
  formFilter: FormGroup;
  ociDetalleArray: OciDetalle[] = [];
  cliente: Cliente[] = [];
  clienteSelect: number;

  estadoOCI = [{ id: 0, text: 'SIN PROGRAMAR' }, { id: 1, text: 'SIN ENTREGAR' }, { id: 2, text: 'DESPACHADO' }, { id: 3, text: 'ENTREGADO' }];
  estadoOCISelect: number;

  prioridarOci = [{ id: 0, text: 'ALTA' }, { id: 1, text: 'MEDIA' }, { id: 2, text: 'BAJA' }];
  prioridadOciSelect: number;

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
  ) {
  }
  formOci = this.fb.group({
    oci : ['']
    ,cliente : ['']
    ,estado : ['']
    ,estimacion: ['']
    ,prioridad: ['']
    ,nota: ['']

  });
  ngOnInit(): void {
    this.clienteService.list().subscribe({
      next: (e) => {
        this.cliente = e;
      }
    });

  }

  agregarDetalle(detalle: OciDetalle) {
    this.ociDetalleArray.push(detalle);
  }
  cancelar() {

  }
  guardar() {

  }

} 
