import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../feature1-module/models/user';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  public form: FormGroup;
  public name = 'Reactivos';
  public usuario: User = new User(100, 'Jose', 'Ariza', 'imagen.png');

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.form = this.formBuilder.group(this.usuario);
  }

  onSubmit(){

  }


}
