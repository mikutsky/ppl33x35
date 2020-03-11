import { Component, OnInit, OnDestroy } from "@angular/core";
import { IStorageContainerRecord } from "src/app/services/interfaces";
import { StorageService } from "../services/storage.service";
import { Subscription } from "rxjs";

@Component({
  selector: "history-block",
  templateUrl: "./history-block.component.html",
  styleUrls: ["./history-block.component.scss"]
})
export class HistoryBlockComponent implements OnInit, OnDestroy {
  records: Array<IStorageContainerRecord>;
  selectedItem: IStorageContainerRecord;
  stream: Subscription;

  get showTabControl(): Boolean {
    return this.records.length > 1;
  }

  constructor(private storageService: StorageService) {
    this.records = storageService.snapshot();
    this.selectedItem = this.records[0];
  }

  ngOnInit(): void {
    this.stream = this.storageService.snapshotStream.subscribe(snapshot => {
      this.records = snapshot;
      this.selectedItem = this.records[0];
    });
  }

  ngOnDestroy(): void {
    this.stream.unsubscribe();
  }

  onSelectItem(containerRecord: IStorageContainerRecord): void {
    this.selectedItem = containerRecord;
  }

  onRemove(id: string): void {
    this.storageService.removeRecord(id);
  }

}
