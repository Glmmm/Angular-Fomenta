import { Routes } from '@angular/router';
import { TabelaPessoasComponent } from './components/tabela-pessoas/tabela-pessoas.component';
import { CriarPessoaComponent } from './components/tabela-pessoas/components/criar-pessoa/criar-pessoa.component';

export const routes: Routes = [
  { path: 'pessoas', component: TabelaPessoasComponent },
  { path: 'pessoas/criar', component: CriarPessoaComponent },
];
