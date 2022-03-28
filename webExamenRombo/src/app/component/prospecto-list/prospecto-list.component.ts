import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospecto } from 'src/app/models/prospecto';
import { ProspectoService } from 'src/app/service/prospecto.service';

@Component({
  selector: 'app-prospecto-list',
  templateUrl: './prospecto-list.component.html',
  styleUrls: ['./prospecto-list.component.css']
})
export class ProspectoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  prospectos:any = [];
  Enviado='Enviado';
  Aceptado='Aceptado';
  Rechazado='Rechazado';


  constructor(private prosService: ProspectoService,
              private _rout: Router)
               { }

  ngOnInit(): void {
    this.buscarProspectos();
  }
  buscarProspectos(){
    this.prosService.getProspectos().subscribe(
      res => {
        this.prospectos = res;
      },
      err => console.log(err)
    )
  }

  AgregarNuevo(){
    this._rout.navigate(['/prospecto/Add/0']);
  }

  deleteProspecto(id: string){
    this.prosService.deleteProspecto(id).subscribe(
      res => {
        console.log(res);
        this.buscarProspectos();
      },
      err => console.log(err)
    )
  }
  

}
