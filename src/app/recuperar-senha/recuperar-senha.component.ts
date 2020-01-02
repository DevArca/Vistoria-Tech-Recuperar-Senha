import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  senha: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.senha = this.formBuilder.group({
      senha1: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10), Validators.required])],
      senha2: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(10), Validators.required])]
    })

  }
  hide = true;
  ngOnInit() {
  }

}
