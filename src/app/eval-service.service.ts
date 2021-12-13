import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from './models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class EvalServiceService {
  private apiURL: string = "http://localhost:3001/";
  //this.httpClient.get('http://localhost:3001/posts')

  constructor(
    private httpClient: HttpClient,
    private router:Router,
  ) { }

  evalGet():Observable<Post[]>{
    let url=this.apiURL+'posts';
    return this.httpClient.get<Post[]>(url)
    .pipe();
  }
}
