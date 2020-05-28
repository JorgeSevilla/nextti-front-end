import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/Produto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Salvar(produto:Produto){
    this.service.createProduto(produto)
    .subscribe(data=>{
      alert("Foi salvo com sucesso");
      this.router.navigate(["listar"]);
    })
  }

}
