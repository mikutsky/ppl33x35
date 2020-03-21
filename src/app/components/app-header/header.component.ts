import { Component, OnInit, OnDestroy } from "@angular/core";

interface IMenuItem {
  name: string;
  href: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  mineMenu: Array<IMenuItem>;

  constructor() {
    this.mineMenu = [
      { name: "Home", href: "/" },
      { name: "Search now", href: "/search" },
      { name: "About us", href: "/about" },
      { name: "Contacts", href: "/contacts" }
    ];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
