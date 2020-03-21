import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { formatDate } from "@angular/common";
import {
  IStorageContainerRecord,
  IContainerInfo
} from "src/app/services/interfaces";

const _storageKey = "responseList";
const _maxLength = 16;

@Injectable({
  providedIn: "root"
})
export class StorageService {
  private _enabeled: boolean = true;

  private get _genId(): string {
    const rand = Math.random();
    const dateTimeCode = "000000000000" + new Date().getTime().toString(16);
    const randomCode = "000000000000" + rand.toString(16).slice(2);
    return `${dateTimeCode.slice(-12)}-${randomCode.slice(-12)}`;
  }

  private get _dateTime(): string {
    return formatDate(new Date(), "MMM d, y, HH:mm:ss", "en-US");
  }

  private set _storage(storageArray: Array<IStorageContainerRecord>) {
    localStorage.setItem(
      _storageKey,
      JSON.stringify(storageArray.splice(0, this._enabeled ? _maxLength : 1))
    );
  }

  private _genEvent() {
    this.snapshotStream.next(this.snapshot());
  }

  set setEnabled(enable: boolean) {
    this._enabeled = enable;
  }

  get getEnabled(): boolean {
    return this._enabeled;
  }

  public clear(): void {
    localStorage.removeItem(_storageKey);
    this._genEvent();
  }

  public snapshot(): Array<IStorageContainerRecord> {
    const storageList = localStorage.getItem(_storageKey);
    if (!storageList) return [];
    return JSON.parse(storageList);
  }

  public snapshotStream: Subject<Array<IStorageContainerRecord>>;

  public addRecord(container: IContainerInfo, requestLink?: string): void {
    const snapshot: Array<IStorageContainerRecord> = this.snapshot();
    const conainerRecord: IStorageContainerRecord = {
      id: this._genId,
      dateTime: this._dateTime,
      link: requestLink,
      container
    };
    snapshot.unshift(conainerRecord);
    this._storage = snapshot;
    this._genEvent();
  }

  public removeRecord(idRecord: string): void {
    const snapshot = this.snapshot();
    this._storage = snapshot.filter(({ id }) => id !== idRecord);
    this._genEvent();
  }

  constructor() {
    this.snapshotStream = new Subject<Array<IStorageContainerRecord>>();
  }
}
