import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-banner",
  templateUrl: "./home-banner.component.html",
  styleUrls: ["./home-banner.component.scss"]
})
export class BannerComponent implements OnInit {
  title: string = "Find your container";
  article: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio
  perferendis voluptatibus eos, maiores iusto iure incidunt doloremque
  dignissimos corrupti, repellat molestias perspiciatis qui est aliquid
  quas, voluptate delectus culpa?`;
  button: string = "Search now";
  href: string = "/search";

  constructor() {}

  ngOnInit(): void {}
}
