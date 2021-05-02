import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private url : UrlService,
    private http : HttpClient
  ) { }

  obtenerUsuarios(){
    return this.http.get(this.url.urlChat)
  }

  registraroNuevoUsuario(datos: Chat){
    return this.http.post(this.url.urlChat, datos)
  }


}
