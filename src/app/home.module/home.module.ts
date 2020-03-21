import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { BannerComponent } from "./components/home-banner/home-banner.component";
import { ArticleComponent } from "./components/home-article/home-article.component";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, BannerComponent, ArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
