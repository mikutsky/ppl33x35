import { Component, OnInit } from "@angular/core";

@Component({
  selector: "about-article",
  templateUrl: "./about-article.component.html",
  styleUrls: ["./about-article.component.scss"]
})
export class ArticleComponent implements OnInit {
  title = "About article";
  subtitle = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
  article = [
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
    doloribus? Quasi similique voluptatem quis, consequatur vel unde
    accusantium doloribus quae modi nam, odio excepturi molestias numquam,
    inventore distinctio iusto officiis?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum
    velit nobis praesentium nemo vel necessitatibus modi. Cupiditate natus
    ut quae, totam fugit earum veniam modi non deserunt, ipsam eius? Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Nisi eum cumque
    aliquam ex repellat vel obcaecati iusto ullam aut fuga! Iusto odio
    maiores, minus suscipit deleniti dolore culpa? Molestiae, expedita.`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
    doloribus? Quasi similique voluptatem quis, consequatur vel unde
    accusantium doloribus quae modi nam.`
  ];
  link = { name: "Start at home...", href: "/" };

  constructor() {}

  ngOnInit(): void {}
}
