import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient ) { }
  userRegistion(data:any){
    return this.http.post('http://localhost:3000/user',data);
  }
  userLogin(data: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",data.email);
    queryParams = queryParams.append("password",data.password);
    return this.http.get('http://localhost:3000/user',{params:queryParams});
  }
}
