import { Component, OnInit, OnDestroy } from "@angular/core";
import { MessageService } from "src/app/services/message.service";
import { Subscription } from "rxjs";
import { IMessageBox } from "../services/interfaces";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.scss"]
})
export class MessageBoxComponent implements OnInit, OnDestroy {
  messageBox: IMessageBox;
  button = "Close";
  show = false;

  private stream: Subscription;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.stream = this.messageService.messageStream.subscribe(messageBox => {
      this.messageBox = messageBox;
      this.show = true;
    });
  }

  ngOnDestroy(): void {
    this.stream.unsubscribe();
  }

  onClose(): void {
    this.show = false;
  }
}
