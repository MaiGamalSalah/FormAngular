import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
 /*  userToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJpYXQiOjE3NDMwMzc2NTAsImV4cCI6MTc0MzA4MDg1MH0.BgL5QiZyAes_qCeAL91JnxgqJ_oFSgCtb0NWNfmVxCM'

  httpoptins={
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.userToken}`
    })
  } */
  ctreateNotes(note: any) {
    console.log('Create notes', note);
    const url=environment.apiUrl;
    return this.http.post(url,note);


  }
}
