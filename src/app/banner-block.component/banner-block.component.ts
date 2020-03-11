import { Component, OnInit } from "@angular/core";

@Component({
  selector: "banner-block",
  templateUrl: "./banner-block.component.html",
  styleUrls: ["./banner-block.component.scss"]
})
export class BannerBlockComponent implements OnInit {
  title: string = "Find your container";
  article: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio
  perferendis voluptatibus eos, maiores iusto iure incidunt doloremque
  dignissimos corrupti, repellat molestias perspiciatis qui est aliquid
  quas, voluptate delectus culpa?`;
  button: string = "Sign up";
  href: string = "/";

  constructor() {}

  ngOnInit(): void {}
}
