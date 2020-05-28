import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Pedido} from 'src/app/Model/Pedido';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Salvar(pedido:Pedido){
    this.service.createPedido(pedido)
    .subscribe(data=>{
      alert("Foi salvo com sucesso");
      this.router.navigate(["listar"]);
    })
  }

}
