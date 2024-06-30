import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Components
import { TabelaPessoasComponent } from './components/tabela-pessoas/tabela-pessoas.component';
import { CriarPessoaComponent } from './components/tabela-pessoas/components/criar-pessoa/criar-pessoa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TabelaPessoasComponent, CriarPessoaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
