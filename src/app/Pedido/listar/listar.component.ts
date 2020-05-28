import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Pedido} from 'src/app/Model/Pedido';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pedidos:Pedido[]

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPedido()
    .subscribe(data=>{
      this.pedidos=data;
    })
  }

  Editar(pedido:Pedido):void{
    localStorage.setItem("idPedido", pedido.idPedido.toString());
    this.router.navigate(["edit"]);
  }

  Deletar(pedido:Pedido){
    this.service.deletePedidoById(pedido)
    .subscribe(data=>{
      this.pedidos=this.pedidos.filter(p=>p!==pedido);
      alert("Usuário deletado com sucesso!");
    })
  }

}
