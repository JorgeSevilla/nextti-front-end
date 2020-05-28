import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produto :Produto = new Produto();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getProdutoById(+id)
    .subscribe(data=>{
      this.produto=data;
    })
  }
  Atualizar(produto:Produto){
    this.service.updateProduto(produto)
    .subscribe(data=>{
      this.produto=data;
      alert("Foi atualizado com sucesso!");
      this.router.navigate(["listar"]);
    })
  }

}
