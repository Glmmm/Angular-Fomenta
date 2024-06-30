import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// SERVICE
import { Pessoas } from '../tabela-pessoas/services/models/Pessoas';
import { PessoasService } from '../tabela-pessoas/services/pessoas.service';


@Component({
  selector: 'app-tabela-pessoas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tabela-pessoas.component.html',
  styleUrl: './tabela-pessoas.component.scss',
})
export class TabelaPessoasComponent implements OnInit {
  pessoas: Pessoas[] = [];
  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {

    this.pessoasService.getPessoas().subscribe({
      next: (resultado: Pessoas[]) => {
        this.pessoas = resultado;
      },
      error: (err) => {
        console.error;
      },
    });
    
  }
}
