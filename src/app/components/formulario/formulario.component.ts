import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup;
  Mensaje: string = '';

  constructor() {
    let controles: any = {
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      correo: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[^@]+@[^@]+.[a-zA-Z]{2,}$'),
      ]),
      contraseña: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmar: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.formulario = new FormGroup(controles);
  }
  enviar() {
    console.log(this.formulario);
    //if (this.formulario.controls['correo'].errors?.['pattern']) {
    //  console.log('llene los datos correctamente');
    //}
    if (
      this.formulario.controls['contraseña'].value !=
      this.formulario.controls['confirmar'].value
    ) {
      //console.log('las contraseñas no coinciden');
      // alert('las contraseñas no coinciden');
      this.Mensaje = 'las contraseñas no coinciden';
    } else {
      this.Mensaje = '';
    }
  }
}
