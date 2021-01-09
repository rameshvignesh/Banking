import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable,of} from 'rxjs';
import { Iuserdetail } from '../models/Iuserdetail';


@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  
  url="http://localhost/banking/api/userdetail";
  //url="http://localhost:62477/api/userdetail"
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) { }

  
  getUserList():Observable<any[]>{
    return this.http.get<any[]>(this.url+"/getDetails");
  }

  getUserdetail(id:number):Observable<Iuserdetail>{
    return this.http.get<Iuserdetail>(this.url+"/GetDetails/"+id);
  }

  getRefid(id:number):Observable<Iuserdetail>{
    return this.http.get<Iuserdetail>(this.url+"/GetRefernceid/"+id);
  }

  addUserdetail(detail:Iuserdetail):Observable<Iuserdetail>{
    return this.http.post<Iuserdetail>(this.url+"/PostDetails",detail,this.httpOptions);
  }

  editUserdetail(details:Iuserdetail):Observable<Iuserdetail>{
    return this.http.put<Iuserdetail>(this.url+'/PutDetails/'+details.Reference_ID,details,this.httpOptions);
  }

}
