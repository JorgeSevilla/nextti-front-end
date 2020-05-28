import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from 'src/app/Model/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  clientes:Cliente[]

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getCliente()
    .subscribe(data=>{
      this.clientes=data;
    })
  }

  Editar(cliente:Cliente):void{
    localStorage.setItem("idCliente", cliente.idCliente.toString());
    this.router.navigate(["edit"]);
  }

  Deletar(cliente:Cliente){
    this.service.deleteClienteById(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(p=>p!==cliente);
      alert("Usuário deletado com sucesso!");
    })
  }
  
}
