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

  fornecedor?: Fornecedor;
  constructor(private service: ListarService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.service
      .buscarPorId((id!))
      .subscribe((fornecedor) => (this.fornecedor = fornecedor));
  }

  excluir() {
    console.log(this.fornecedor?.id)
    this.service.excluir((this.fornecedor?.id!)).subscribe(() => {
      this.router.navigate(['listar'])
    })
  }

  cancelar(){
    this.router.navigate(['listar'])
  }
}
