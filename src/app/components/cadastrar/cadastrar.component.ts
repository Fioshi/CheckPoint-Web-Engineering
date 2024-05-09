import { Component } from '@angular/core';
import { ListarService } from '../../services/listar.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  formGroup: FormGroup = new FormGroup({})
  fornecedor: Fornecedor = {
    id: 0,
    nome: "",
    endereco: "",
    telefone: "",
  }
  constructor(private service: ListarService, private formBuilder: FormBuilder, private route: Router) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required]
    })
  }

  inserir() {
    this.fornecedor = {
      id: this.gerarId(),
      nome: this.formGroup.value.nome,
      endereco: this.formGroup.value.endereco,
      telefone: this.formGroup.value.telefone
    }
    this.service.post(this.fornecedor).subscribe((item) => {
      alert("Cadastrado com sucesso!");
      this.route.navigate(['listar'])
    });

  }

  gerarId(): number {
    return Math.floor(Math.random() * (1000001 - 1 + 1)) + 1;
  }
}

