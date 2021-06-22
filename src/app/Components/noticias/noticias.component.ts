import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../Services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(public noticiasService: NoticiasService) { }

  public noticias:any;

  ngOnInit() {
     this.noticiasService.getNoticias().subscribe(data => {
      this.noticias = data.articles;
      console.log(this.noticias.articles);
     });
      
    }

}
