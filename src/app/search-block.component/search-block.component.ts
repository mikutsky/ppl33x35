import { Component, OnInit } from "@angular/core";
import { ContainerService } from "../services/container.service";
import { StorageService } from "../services/storage.service";
import { MessageService } from "../services/message.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "search-block",
  templateUrl: "./search-block.component.html",
  styleUrls: ["./search-block.component.scss"]
})
export class SearchBlockComponent implements OnInit {
  title = "Search history";
  subtitle = "To search for a container’s history, enter its number";
  label = "Marking number of the container";
  hint = `The unique marking number should consist of only four Latin
  letters and seven digits`;

  btnEnabled: Boolean;

  public searchForm: FormGroup;
  public search: FormControl;
  public saveStorage: FormControl;

  constructor(
    public containerService: ContainerService,
    public storage: StorageService,
    public messageService: MessageService
  ) {
    this.search = new FormControl("", [
      Validators.pattern("^[a-zA-Z]{4}[0-9]{7}$")
    ]);
    this.saveStorage = new FormControl(this.storage.getEnabled);

    this.searchForm = new FormGroup({
      search: this.search,
      saveStorage: this.saveStorage
    });
    this.btnEnabled = this.search.value == "" ? false : !this.search.invalid;
  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value: string) => {
      if (value && value.match(/[^A-Z\d]/gi)) {
        const str = value.replace(/[^A-Z\d]/gi, "");
        this.search.setValue(str);
      }
      this.btnEnabled = this.search.value == "" ? false : !this.search.invalid;
    });
    this.saveStorage.valueChanges.subscribe((value: Boolean) => {
      this.storage.setEnabled = value;
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) return;

    const id = this.search.value.toUpperCase();
    const verificated = this.containerService.verificationID(id);

    if (!verificated)
      return this.messageService.show({
        title: "Invalid container marking number",
        subtitle: "Marking number failed verification",
        message: `Please check the marking number in search field. The container with
        the entered number does not exist.`
      });

    this.containerService.getContainerInfo(id).subscribe(
      ({ containerInfo, requestLink }) => {
        this.storage.addRecord(containerInfo, requestLink);
        this.search.setValue("");
        this.search.markAsUntouched();
      },
      err => {
        this.messageService.show({
          title: err.name,
          subtitle: err.statusText,
          message: err.message
        });
      }
    );
  }

  onReset(): void {}

  onClear(): void {
    this.storage.clear();
  }
}
