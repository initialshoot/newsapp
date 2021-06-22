import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/shared/nav/nav.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { NoticiasComponent } from './Components/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoticiaComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
