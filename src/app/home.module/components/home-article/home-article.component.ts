import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home-article",
  templateUrl: "./home-article.component.html",
  styleUrls: ["./home-article.component.scss"]
})
export class ArticleComponent implements OnInit {
  title = "Home article";
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
  link = { name: "More about us...", href: "/about" };

  constructor() {}

  ngOnInit(): void {}
}
