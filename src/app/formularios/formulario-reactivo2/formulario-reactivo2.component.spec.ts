import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivo2Component } from './formulario-reactivo2.component';

describe('FormularioReactivo2Component', () => {
  let component: FormularioReactivo2Component;
  let fixture: ComponentFixture<FormularioReactivo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReactivo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReactivo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
