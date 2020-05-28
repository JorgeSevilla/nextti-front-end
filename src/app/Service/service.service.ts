import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Model/Cliente';
import { Produto } from '../Model/Produto';
import { Pedido } from '../Model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/nextti';
  
//Métodos para cliente
  getCliente(){
    return this.http.get<Cliente[]>(this.Url);
  }
  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url,cliente);
  }
  getClienteById(idCliente:number){
    return this.http.get<Cliente>(this.Url+"/"+idCliente);
  }
  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.idCliente, cliente);
  }
  deleteClienteById(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.idCliente);
  }
//Métodos para Produto
  getProduto(){
    return this.http.get<Produto[]>(this.Url);
  }
  createProduto(produto:Produto){
    return this.http.post<Produto>(this.Url,produto);
  }
  getProdutoById(idProduto:number){
    return this.http.get<Produto>(this.Url+"/"+idProduto);
  }
  updateProduto(produto:Produto){
    return this.http.put<Produto>(this.Url+"/"+produto.idProduto, produto);
  }
  deleteProdutoById(produto:Produto){
    return this.http.delete<Cliente>(this.Url+"/"+produto.idProduto);
  }
//Métodos para Pedido
  getPedido(){
    return this.http.get<Pedido[]>(this.Url);
  }
  createPedido(pedido:Pedido){
    return this.http.post<Pedido>(this.Url,pedido);
  }
  getPedidoById(idPedido:number){
    return this.http.get<Pedido>(this.Url+"/"+idPedido);
  }
  updatePedido(pedido:Pedido){
    return this.http.put<Pedido>(this.Url+"/"+pedido.idPedido, pedido);
  }
  deletePedidoById(pedido:Pedido){
    return this.http.delete<Pedido>(this.Url+"/"+pedido.idPedido);
  }
}
