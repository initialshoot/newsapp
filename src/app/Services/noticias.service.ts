import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

    private url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8732ccdc09a14f489386a0652dec3098';

  constructor(private http: HttpClient ) { }

  public getNoticias(): Observable<any>{
    return this.http.get(this.url);
  }
}
