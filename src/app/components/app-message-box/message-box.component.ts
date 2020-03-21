import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { MessageService } from "src/app/services/message.service";
import { IMessageBox } from "src/app/services/interfaces";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.scss"]
})
export class MessageBoxComponent implements OnInit, OnDestroy {
  messageBox: IMessageBox;
  button = "Close";
  show = false;

  private _stream: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this._stream = this.messageService.messageStream.subscribe(messageBox => {
      this.messageBox = messageBox;
      this.show = true;
    });
  }

  ngOnDestroy(): void {
    this._stream.unsubscribe();
  }

  onClose(): void {
    this.show = false;
  }
}
