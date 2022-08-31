import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restaurant"
  regurl="http://localhost:3000/"
  constructor( private http : HttpClient) { }
  getList(){
    return this.http.get(this.url)
  }
  saveResto(data:any)
  {
    // console.warn(data)
    return this.http.post(this.url,data)
  }
  deleteResto(id:any)
  {
    return this.http.delete(this.url+ '/' + id)
    // return this.http.delete('${this.url}/${id}')
  }
  getCurrentResto(id: number){
    return this.http.get(this.url+ '/' + id)
  }
  updateResto(id: number, data:any){
    return this.http.put(this.url+ '/' + id , data)
  }
  registerUser(data:any)
  {
    return this.http.post(this.regurl + "User" , data)
  }

}
