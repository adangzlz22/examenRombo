import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { environment } from '../../environments/environment';
import { Prospecto } from '../models/prospecto';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  API_URI = environment.url;

  constructor(private http:HttpClient) { 

  }

  getProspectos(){
    return this.http.get(`${this.API_URI}prospecto`);
  }
  getProspecto(id: string){
    return this.http.get(`${this.API_URI}prospecto/${id}`);
  }
  deleteProspecto(id: string){
    return this.http.delete(`${this.API_URI}prospecto/${id}`);
  }
  saveProspecto(prospecto : Prospecto){
    return this.http.post(`${this.API_URI}prospecto`,prospecto);
  }
  updateProspecto(id: number, prospecto : Prospecto){
    return this.http.put(`${this.API_URI}prospecto/${id}`,prospecto);
  }
}


