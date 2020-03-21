import { Component, OnInit, OnDestroy } from "@angular/core";
import { ContainerService } from "src/app/services/container.service";
import { StorageService } from "src/app/services/storage.service";
import { MessageService } from "src/app/services/message.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

const errMsg = {
  nonLatin: {
    title: "Not latin letters",
    subtitle: "Incorrect marking number",
    message: "Please use latin letters and numbers."
  }
};

@Component({
  selector: "search-block",
  templateUrl: "./search-block.component.html",
  styleUrls: ["./search-block.component.scss"]
})
export class SearchBlockComponent implements OnInit, OnDestroy {
  title = "Search history";
  subtitle = "To search for a container’s history, enter its number";
  label = "Marking number of the container";
  hint = `The unique marking number should consist of only four Latin
  letters and seven digits`;
  get btnEnabled(): boolean {
    return this.search.value == "" ? false : !this.search.invalid;
  }

  private _searchChangeStream: Subscription;

  public searchForm: FormGroup;
  public search: FormControl;
  public saveStorage: FormControl;

  constructor(
    private containerService: ContainerService,
    private storage: StorageService,
    private messageService: MessageService
  ) {
    this.search = new FormControl("", [
      Validators.pattern("^[a-zA-Z]{4}[0-9]{7}$")
    ]);
    this.saveStorage = new FormControl(this.storage.getEnabled);
    this.searchForm = new FormGroup({
      search: this.search,
      saveStorage: this.saveStorage
    });
  }

  ngOnInit(): void {
    this._searchChangeStream = this.search.valueChanges.subscribe(
      (value: string) => {
        if (value.match(/[а-яії]/gi)) this.messageService.show(errMsg.nonLatin);
        if (value && value.match(/[^A-Z\d]/gi)) {
          const str = value.replace(/[^A-Z\d]/gi, "");
          this.search.setValue(str);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._searchChangeStream.unsubscribe();
  }

  onSubmit(): void {
    const id = this.search.value.toUpperCase();

    this.containerService.getContainerInfo(id).subscribe(
      ({ containerInfo, requestLink }) => {
        this.storage.setEnabled = this.saveStorage.value;
        this.storage.addRecord(containerInfo, requestLink);
        this.onReset();
      },
      err => {
        this.messageService.show(err);
      }
    );
  }

  onReset(): void {
    this.search.markAsUntouched();
    this.search.setValue("");
  }

  onClear(): void {
    this.storage.clear();
  }
}
