import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor() {
    let texto: string = '^[a-z]+@[a-z]+';
    let controles: any = {
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(texto),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.pattern(texto),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
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
    if (this.formulario.controls['correo'].errors?.['pattern']) {
      console.log('llene los datos correctamente');
    }
  }
}
