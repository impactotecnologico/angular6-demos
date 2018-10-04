import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo2',
  templateUrl: './formulario-reactivo2.component.html',
  styleUrls: ['./formulario-reactivo2.component.css']
})
export class FormularioReactivo2Component implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {

    let firstName: FormControl = new FormControl();

    firstName.setValue([Validators.required]);

    this.form = this.formBuilder.group({
      first_name: firstName,
      last_name: ['', Validators.required ],
      avatar: ''
    });

    this.form.setValue({
      first_name: '',
      last_name: '',
      avatar: ''
    });


  }

  onSubmit(){

  }

}
