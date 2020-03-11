import { Component, OnInit, Input } from "@angular/core";
import {
  IStorageContainerRecord,
  IContainerInfo,
  IHistoryLocation
} from "../services/interfaces";

@Component({
  selector: "info-view",
  templateUrl: "./info-view.component.html",
  styleUrls: ["./info-view.component.scss"]
})
export class InfoViewComponent implements OnInit {
  emptyTitle = "No container information";
  emptyMessage = "Use the search to get information about the container";

  @Input()
  record: IStorageContainerRecord;

  get isNotEmpty(): Boolean {
    return this.record ? true : false;
  }

  get history(): Array<IHistoryLocation> {
    return this.record.container.history;
  }

  get getInfo(): IContainerInfo {
    return this.record.container;
  }

  constructor() {}

  ngOnInit(): void {}
}
