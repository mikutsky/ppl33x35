import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { IMessageBox } from "src/app/services/interfaces";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private defaultMessageBox: IMessageBox;

  public messageStream: Subject<IMessageBox>;

  public show(messageBox: IMessageBox = this.defaultMessageBox) {
    this.messageStream.next(messageBox);
  }

  constructor() {
    this.defaultMessageBox = {
      title: "Warning",
      subtitle: "Unforeseen happened",
      message: `It didn’t depend on us. Please repeat
      the action later`
    };
    this.messageStream = new Subject<IMessageBox>();
  }
}
