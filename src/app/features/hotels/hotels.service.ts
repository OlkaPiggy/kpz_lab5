import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Hotel} from "./hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getHotels(){
    return this.httpClient.get<Hotel[]>("https://localhost:44360/api/Hotels");
    //https://localhost:44360/api/Hotels
  }
}
