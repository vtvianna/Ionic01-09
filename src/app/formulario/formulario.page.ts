import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from '../servico/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
titulo = "Cadastro";
imagem = 'https://cdn.pixabay.com/photo/2022/12/16/18/06/ice-7660302_640.jpg';

nameButton = "cadastrar";

/* atributo que guarda os dados do formulario*/
form!:FormGroup;

/*
Precisamos injetar a ferramenta formbuilder
A função do formbuilder é criar e validar os campos do formulario
*/

  constructor(
    /* Ferramenta de criação de formulario */
    private formBuilder:FormBuilder,
    
    /* Nosso serviço de banco de dados */
    private bancoDados: DatabaseService

    ) { }

  ngOnInit() {
    /* Inicializar o metodo validaForm  */
    this.validaForm();
  }
 
  /* Metodo de criação e validação do formulario */
  validaForm(){
    this.form = this.formBuilder.group({
      item:['',[Validators.required, Validators.minLength(2)]],
      quant:['',[Validators.required, Validators.maxLength(7)]]
    })
  }
  /* Metodo do botão do formulario */
  cadastroButton(){
    /* Usando o metodo de cadastro do nosso serviço*/
this.bancoDados.cadastro(this.form.value);

  }
}
