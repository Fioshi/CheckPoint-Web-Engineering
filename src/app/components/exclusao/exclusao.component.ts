import { Component } from '@angular/core';
import { ListarComponent } from '../listar/listar.component';
import { ListarService } from '../../services/listar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../interfaces/Fornecedor';

@Component({
  selector: 'app-exclusao',
  standalone: true,
  imports: [],
  templateUrl: './exclusao.component.html',
  styleUrl: './exclusao.component.css'
})
export class ExclusaoComponent {

  fornecedor: Fornecedor = {
    id: 0,
    nome: "",
    endereco: "",
    telefone: ""
  }
  constructor(private service: ListarService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service
      .buscarPorId(parseInt(id!))
      .subscribe((fornecedor) => (this.fornecedor = fornecedor));
  }

  excluir() {
    this.service.excluir((this.fornecedor?.id!)).subscribe(() => {
      this.router.navigate(['listar'])
    })
  }

  cancelar(){
    this.router.navigate(['listar'])
  }
}
