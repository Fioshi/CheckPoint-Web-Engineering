import { Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ExclusaoComponent } from './components/exclusao/exclusao.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
    {path: "listar", component: ListarComponent},
    {path: "cadastrar", component: CadastrarComponent},
    {path: "excluir/:id", component: ExclusaoComponent},
    {path: "editar/:id", component: EditarComponent}
];
