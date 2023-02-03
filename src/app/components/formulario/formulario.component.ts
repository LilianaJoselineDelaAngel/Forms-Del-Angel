import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formularioLogin: FormGroup;

  constructor() {
    let controles: any = {
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      // terminos: new FormControl(true, []),
      //terminos: new FormControl(true),
      terminos: new FormControl(),
    };
    this.formularioLogin = new FormGroup(controles);
  }
  login() {
    console.log(this.formularioLogin);
  }
}
