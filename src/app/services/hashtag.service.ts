import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private http:HttpClient) { }

  getAllHashtags(){
    return this.http.get(`http://localhost:8080/getHashtags`);
  }
}
