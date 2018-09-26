import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare function init_plugins();
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

forma: FormGroup;

  constructor( public _usuarioService: UsuarioService,
              public router: Router) { }

  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombre: new FormControl('', Validators.required ),
      email: new FormControl('', [Validators.required, Validators.email] ),
      password: new FormControl('', Validators.required ),
      password2: new FormControl('', Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') } );

    this.forma.setValue({
      nombre: 'test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }
  sonIguales(campo1: string, campo2: string) {
    return ( group: FormGroup ) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }
  registrarUsuario() {
    if (!this.forma.valid) {
      return;
    }
    if ( !this.forma.value.condiciones ) {
      console.log('debe aceptar las condiciones');
      swal("Importante!", "Debe aceptar las condiciones!", "warning");
      return;
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );
    this._usuarioService.register(usuario)
                        .subscribe( resp => {
                          console.log(resp);
                          this.router.navigate(['/login']);
                        });
    console.log(this.forma);
  }
}
