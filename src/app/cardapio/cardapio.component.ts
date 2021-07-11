
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduto } from "../produto";
import { PedidoService } from "../pedido/pedido.service";

const urlBase = 'http://localhost:3000'

interface Cardapio {
  categoria: string,
  descricao: string,
  preco: number
}
@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  
  produtos: IProduto[] = [];
  constructor(private httpClient: HttpClient, public pedidoService: PedidoService) { }


  ngOnInit(): void {
    this.httpClient.get<IProduto[]>(`${urlBase}/cardapio`)
      .subscribe(produtos => {
        this.produtos = produtos;
      });
  }

}

