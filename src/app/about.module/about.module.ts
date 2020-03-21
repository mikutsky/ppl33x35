import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";
import { ArticleComponent } from "./components/about-article/about-article.component";
import { GalleryComponent } from "./components/about-gallery/about-gallery.component";

const routes: Routes = [{ path: "", component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent, ArticleComponent, GalleryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AboutModule {}
