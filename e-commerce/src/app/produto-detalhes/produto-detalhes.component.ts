import { Component, OnInit } from '@angular/core';
import { ProdutoDetalhes } from './produto-detelhes.model';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  produto: ProdutoDetalhes = {

    nome: "HIDRATANTE FACIAL VICHY MINÉRAL 89",
    img:"https://i.imgur.com/uYGW8dc.jpg",
    marca: "Vichy",
    tamanho: "50ml",
    descricao: "Hidratante Vichy Minéral 89 é um fortalecedor facial composto com Ácido Hialurônico e 89% de Água Vulcânica Mineralizante, comprovadamente capaz de fortalecer as defesas naturais da pele.",
    valor: 185.99,
    temEstoque: true,
    codigo: 17529,
    ean: 1032165465215,
    fabricante: "Medley",
    quantidade: "60cps",
    principio: "Dipirona"

    
  }

}
