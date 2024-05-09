import { Component } from '@angular/core';
import { ListarService } from '../../services/listar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {


  fornecedor?: Fornecedor
  constructor(private service: ListarService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      id: ['',Validators.required],
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  formGroup: FormGroup = new FormGroup({})

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId((id!)).subscribe((fornecedor) => {
      this.formGroup.patchValue({
        id: fornecedor.id,
        nome: fornecedor.nome,
        endereco: fornecedor.endereco,
        telefone: fornecedor.telefone
      });
    });
  }

  atualizar() {
    if (this.formGroup.valid) {
      this.service.editar(this.formGroup.value).subscribe(() => {
        this.router.navigate(['listar']);
      });
    }
  }


}
