import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Prenda } from 'src/app/model/prenda.model';
import { Produccion } from 'src/app/model/produccion';
import { Tela } from 'src/app/model/tela.model';
import { PrendaService } from 'src/app/service/prenda.service';
import { ProduccionService } from 'src/app/service/produccion.service';
import { TelaService } from 'src/app/service/tela.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-oci-detalle',
  templateUrl: './oci-detalle.component.html',
  styleUrls: ['./oci-detalle.component.scss']
})
export class OciDetalleComponent implements OnInit {

  @Input() ociDetalleEstado: any[];
  @Output() cancelarEvent = new EventEmitter<Boolean>();
  @Output() agregarDetalle = new EventEmitter<any>();

  nuevoDetalle: boolean = true;
  formFilter: FormGroup;
  ociDetalleEstadoSelect: number;
  prendaDetalleSelect: number;
  siNo = [{ id: 0, text: 'Si' }, { id: 1, text: 'No' }];

  telaSelect: number;
  cambioTelaSelect: number;
  tallaSelect: number;
  poseeTelaSelect: number;
  tallaObj = [{ id: 0, text: 'XXXS' }, { id: 1, text: 'XXS' }, { id: 2, text: 'XS' }, { id: 3, text: 'S' }, { id: 4, text: 'M' }, { id: 5, text: 'L' },
  { id: 6, text: 'XL' }, { id: 7, text: 'XXL' }, { id: 8, text: 'XXXL' }];
  // prendaDetalle: Prenda[] =[];
  produccionDetalleSelect: number;

  prendaDetalle: Prenda[] = [];
  telaDetalle: Tela[] = [];

  produccionDetalle: Produccion[] = [];
  crearDetalle = true;
  loading = false;
  formOciDetalle = this.fb.group({
    prenda: ['', Validators.required],
    cantidad: ['', Validators.required],
    comentario: ['', Validators.required],

    estado: ['', Validators.required],
    tela: ['', Validators.required],
    color: ['', Validators.required],


    produccion: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    cambioTela: ['', Validators.required],
    talla: ['', Validators.required],
    poseeTela: ['', Validators.required],
  })
  public addPrenda: (name: any) => void;
  constructor(
    private prendaService: PrendaService,
    private telaService: TelaService,
    private produccionService: ProduccionService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.prendaService.list().subscribe({
      next: (e) => {
        this.prendaDetalle = e;
      }
    });
    this.telaService.list().subscribe({
      next: (e) => {
        this.telaDetalle = e;
      }
    });
    this.produccionService.list().subscribe({
      next: (e) => {
        this.produccionDetalle = e;
      }
    })
    this.addPrenda = function (descripcion: any) {
      console.log('agregado')
      this.loading = true;
      console.log(descripcion);
      let prendaObj: Prenda = {
        id: 0,
        descripcion: descripcion
      }
      // let respuesta = this.prendaService.save(prendaObj).toPromise();
      const respuesta = this.guardarPrenda(prendaObj);
      this.loading = false;
      return respuesta;
    };
  }
  guardarPrenda(prenda: Prenda) {
    return this.prendaService.save(prenda).toPromise();
  }

  ociDetalle(param: boolean) {
    this.nuevoDetalle = !this.nuevoDetalle;
  }
  cancelar() {
    this.cancelarEvent.emit(true);
  }
  limpiarFormulario() {
    this.formOciDetalle.reset();
  }
  guardar() {
    console.log(this.formOciDetalle.value)
    this.agregarDetalle.emit(this.formOciDetalle.value)
  }
  mostrarOciDetalle() {
    this.crearDetalle = !this.crearDetalle;
  }

  async createPrenda(descripcion: any) {
    this.loading = true;
    console.log(descripcion);
    let prendaObj: Prenda = {
      id: 0,
      descripcion: descripcion
    }
    prendaObj = await this.prendaService.save(prendaObj).toPromise();
    this.loading = false;
    return prendaObj;
  }
  // async createPrenda(descripcion: string) {
  //   this.loading = true;
  //   let prendaObj: Prenda = {
  //     id: 0,
  //     descripcion: descripcion
  //   }
  //   prendaObj = await this.prendaService.save(prendaObj).toPromise();
  //   this.prendaDetalle.push(prendaObj);
  //   this.loading = false;
  //   return prendaObj;
  //   }
}
