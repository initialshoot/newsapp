import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { NoticiasComponent } from './Components/noticias/noticias.component';

const routes: Routes = [

{ path: 'noticias', component: NoticiasComponent },
{ path: 'noticia', component: NoticiaComponent },
{ path: '**', component: NoticiasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
