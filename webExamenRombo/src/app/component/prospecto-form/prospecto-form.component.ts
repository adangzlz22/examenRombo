import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Prospecto } from 'src/app/models/prospecto';
import { ProspectoService } from 'src/app/service/prospecto.service';


@Component({
  selector: 'app-prospecto-form',
  templateUrl: './prospecto-form.component.html',
  styleUrls: ['./prospecto-form.component.css']
})
export class ProspectoFormComponent implements OnInit {

  @HostBinding('class') classess = 'row';
  textoVista:string ='Nuevo prospecto';
  prospecto: any = {
    id : 0,
    nombre:'',
    apeidoP:'',
    apeidoM:'',
    calle:'',
    numero:'',
    colonia:'',
    codigoPostal:'',
    telefono:'',
    rfc:'',
    archivos:'',
    status:0
  };
  edit:boolean = false;

  constructor(private prosService:ProspectoService,
              private _rout:Router,
              private _acti:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this._acti.snapshot.params;
    console.log(params)
    if (params["id"] != 0 ) {
        this.prosService.getProspecto(params["id"])
        .subscribe(
          res => {
              this.prospecto = res;
              let variable = this.prospecto[0];
              this.prospecto = [{}];
              this.prospecto = {};
              this.prospecto.id = variable.id;
              this.prospecto.nombre = variable.nombre ;
              this.prospecto.apeidoP = variable.apeidoP ;
              this.prospecto.apeidoM = variable.apeidoM ;
              this.prospecto.calle = variable.calle ;
              this.prospecto.numero = variable.numero ;
              this.prospecto.colonia = variable.colonia ;
              this.prospecto.codigoPostal = variable.codigoPostal ;
              this.prospecto.telefono = variable.telefono ;
              this.prospecto.rfc = variable.rfc ;
              this.prospecto.archivos = variable.archivos ;
              this.prospecto.status = variable.status ;
              console.log(this.prospecto);

              this.textoVista='Editar prospecto';
              this.edit = true;
          },
          err => {
            console.log(err);
          }
        )
      }
    
  }

  guardarProspecto(){
    console.log(this.prospecto)
    this.prosService.saveProspecto(this.prospecto)
    .subscribe(
      res => {
        console.log(res);
        this._rout.navigate(['/prospecto']);
      },
      err => {
        console.log(err);
      }
    )
  }
  editarProspecto(){
    console.log(this.prospecto)
    this.prosService.updateProspecto( this.prospecto.id , this.prospecto)
    .subscribe(
      res => {
        console.log(res);
        this._rout.navigate(['/prospecto']);
      },
      err => {
        console.log(err);
      }
    )
  }



}
