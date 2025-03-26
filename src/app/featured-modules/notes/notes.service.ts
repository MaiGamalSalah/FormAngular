import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
  userToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDI5NDQ3MjQsImV4cCI6MTc0Mjk4NzkyNH0.w05UruwaH59GQ7-3tcwvoaEHXwhetnoON2LnIF9go4g'

  httpoptins={
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.userToken}`
    })
  }
  ctreateNotes(note: any) {
    console.log('Create notes', note);
    const url='http://localhost:8000/notes';
    return this.http.post(url,note,this.httpoptins);


  }
}
