import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService,
         SharedService,
         SidebarService,
         UsuarioService,
         LoginGuardGuard,
         SubirArchivoService,
         ModalUploadService,
         HospitalService,
         MedicoService
         } from "./service.index";
import { HttpClientModule } from '@angular/common/http';
import {  } from './medico/medico.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ],
  declarations: []
})
export class ServiceModule { }
