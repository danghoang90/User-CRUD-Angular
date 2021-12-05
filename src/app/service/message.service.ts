import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  text?: string;
  constructor() { }
  setText(message?: string){
    this.text = message;
  }
  getText() {
    return this.text;
  }
}
