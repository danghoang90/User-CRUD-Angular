import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   message: any;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.message = this.getMessage();
  }
  getMessage() {
    return  this.messageService.getText();
  }

}
