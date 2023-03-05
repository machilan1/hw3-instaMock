import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})

export class ClientService{
    clientLogged:boolean=true;
    currentClientID:string="leo369";
}