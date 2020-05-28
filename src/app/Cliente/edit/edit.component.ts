import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Model/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cliente :Cliente = new Cliente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getClienteById(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }
  Atualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Foi atualizado com sucesso!");
      this.router.navigate(["listar"]);
    })
  }

}
