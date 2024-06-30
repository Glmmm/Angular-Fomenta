import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Pessoas } from '../../services/models/Pessoas';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-criar-pessoa',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './criar-pessoa.component.html',
  styleUrl: './criar-pessoa.component.scss',
})
export class CriarPessoaComponent implements OnInit {
  pessoaForm!: FormGroup;
  body: Pessoas[] = [];
  constructor(
    private pessoasService: PessoasService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl(),
      email: new FormControl(''),
    });
  }
  onSubmit() {
    const data: Pessoas = this.pessoaForm.value;
    this.pessoasService.createPessoa(data).subscribe({
      next: () => {
        alert("Pessoa criada com sucesso")
        this.router.navigate(['/'])
      }
    })
  }
}
