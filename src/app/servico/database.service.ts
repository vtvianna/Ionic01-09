import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Produtos } from '../model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /* Atributo somente leitura/ ao inveis de passar a url vc passa somente a variavel, servindo para diminuir o codigo  */
  readonly API = 'http://localhost:3000/produtos/';


  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }



  /* Metodo de consulta */ 
    consulta(){

      /* Retorna os dados consultados na WebAPI*/
      return this.http.get<Produtos[]>(this.API)
    }
    
   /* Metodo de cadastro */ 
    cadastro(dados:any){
      
      return this.http.post(this.API, dados, this.httpOptions).subscribe();
    }

    /* Metodo de editar */ 
    editar(dados: any, id: any){
     return this.http.put(this.API + id, dados,this.httpOptions).subscribe();
    }

    /* Metodo de excluir */ 
    excluir(id:any){
     return this.http.delete(this.API + id).subscribe();
    }
}
