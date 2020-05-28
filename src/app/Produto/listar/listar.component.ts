import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Produto } from 'src/app/Model/Produto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

produtos:Produto[]

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getProduto()
    .subscribe(data=>{
      this.produtos=data;
    })
  }

  Editar(produto:Produto):void{
    localStorage.setItem("idProduto", produto.idProduto.toString());
    this.router.navigate(["edit"]);
  }
  Deletar(produto:Produto){
    this.service.deleteProdutoById(produto)
    .subscribe(data=>{
      this.produtos=this.produtos.filter(p=>p!==produto);
      alert("Produto deletado com sucesso!");
    })
  }

}
