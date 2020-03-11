import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  subscribe: string = "Dmitry Mikutsky - PL33-35";

  constructor() {}

  ngOnInit(): void {}
}
