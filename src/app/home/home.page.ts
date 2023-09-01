import { Component } from '@angular/core';
import { Produtos } from '../model/produto.model';
import { DatabaseService } from '../servico/database.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo = 'shoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2022/12/16/18/06/ice-7660302_640.jpg';

  /* Array do ngFor*/
  /* Produtos é o meu molde */
  minhaLista:Produtos[] = [];
  

  /* Métodos para baixo */
  constructor(
    /* Nosso serviço de banco de dados */ 
    private bancoDados: DatabaseService,

      /* Vou fazer um carregando  */
      private loadingControl: LoadingController


    ) {}
  
ngOnInit(): void{
/* Inicia o carregando */


this.carregando();



  /* consulta os dados na WebAPI */
  this.bancoDados.consulta().subscribe(caixa => this.minhaLista = caixa);
}

/* Método do carregando(Loading)*/
async carregando(){
  const load = this.loadingControl.create({
    mode: 'ios',
    message:'Aguarde...',
    duration:2000
  });
  (await load).present();

  
}
excluir(id:any){
  return this.bancoDados.excluir(id);
 }
 
 

}
