import { Component, OnInit } from "@angular/core";

interface IMenuItem {
  name: string;
  href: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  mineMenu: Array<IMenuItem>;
  selectedItem: IMenuItem;

  constructor() {
    this.mineMenu = [
      { name: "Search now", href: "/" },
      { name: "About us", href: "/" },
      { name: "Login", href: "/" }
    ];
    this.selectedItem = this.mineMenu[0];
  }

  ngOnInit(): void {}

  onSelectItem(menuItem: IMenuItem): void {
    this.selectedItem = menuItem;
  }
}
