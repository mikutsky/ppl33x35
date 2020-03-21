import { Component, OnInit } from "@angular/core";

interface IGalleryImage {
  title: string;
  src: string;
}

@Component({
  selector: "about-gallery",
  templateUrl: "./about-gallery.component.html",
  styleUrls: ["./about-gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  gallery: Array<IGalleryImage> = [
    { title: "photo 0x01", src: "assets/de3abf5fea2e24c4.jpg" },
    { title: "photo 0x02", src: "assets/e3e0e878e808e679.jpg" },
    { title: "photo 0x03", src: "assets/9c01474f1f7e8212.jpg" },
    { title: "photo 0x04", src: "assets/bf59aa2e44c44dde.jpg" },
    { title: "photo 0x05", src: "assets/24c4fedebf53aa2e.jpg" },
    { title: "photo 0x06", src: "assets/4a792767b78449d2.jpg" },
    { title: "photo 0x07", src: "assets/de3abf5fea2e24c4.jpg" },
    { title: "photo 0x08", src: "assets/e3e0e878e808e679.jpg" },
    { title: "photo 0x09", src: "assets/9c01474f1f7e8212.jpg" },
    { title: "photo 0x0a", src: "assets/bf59aa2e44c44dde.jpg" },
    { title: "photo 0x0b", src: "assets/24c4fedebf53aa2e.jpg" },
    { title: "photo 0x0c", src: "assets/4a792767b78449d2.jpg" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
