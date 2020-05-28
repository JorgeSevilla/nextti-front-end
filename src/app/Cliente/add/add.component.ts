import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Model/Cliente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  Salvar(cliente:Cliente){
    this.service.createCliente(cliente)
    .subscribe(data=>{
      alert("Foi salvo com sucesso");
      this.router.navigate(["listar"]);
    })
  }

}
