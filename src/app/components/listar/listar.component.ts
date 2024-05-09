import { Component } from '@angular/core';
import { ListarService } from '../../services/listar.service';
import { Fornecedor } from '../../interfaces/Fornecedor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  fornecedores: Fornecedor[] = []
  constructor(private service: ListarService) { }

  ngOnInit(): void {
    console.log(`Oi`)
    this.listar()
  }

  listar() {
    this.service.listar().subscribe((item) => { 
      this.fornecedores = item 
    });
  }
}
