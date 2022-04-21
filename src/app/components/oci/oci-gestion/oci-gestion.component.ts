import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Observable } from 'rxjs';
import { Oci } from 'src/app/model/oci.model';
import { OciService } from 'src/app/service/oci.service';
import { Subject } from 'rxjs';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OciDetalle } from 'src/app/model/oci-detalle.model';

@Component({
  selector: 'app-oci-gestion',
  templateUrl: './oci-gestion.component.html',
  styleUrls: ['./oci-gestion.component.scss']
})
export class OciGestionComponent implements AfterViewInit, OnInit, OnDestroy {

  listaOci: Oci[];
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, { static: false })


  dtTrigger: Subject<any> = new Subject<any>();
  ociId = "";
  listaOciDetalle: OciDetalle[] =[];
  constructor(
    private ociServicio: OciService,
    private modalService: NgbModal,

  ) { }
  initTable() {
    this.ociServicio.list().subscribe({
      next: (x) => {
        this.listaOci = x;
        // this.rerender();
      }

    });
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [['1', 'desc']],
    };
    this.initTable();
  }
  rerender(): void {
    try {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
    catch (e) {
      this.dtTrigger.next();
    }
  }

  ngAfterViewInit(): void {
    // this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  mostrarDetalle(item: any) {
    this.ociId = item.oci
    console.log(JSON.stringify(item) + '\n\n\n')
    console.log(item);
  }
}
