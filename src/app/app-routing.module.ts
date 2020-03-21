import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "", loadChildren: "./home.module/home.module#HomeModule" },
  {
    path: "search",
    loadChildren: "./search.module/search.module#SearchModule"
  },
  { path: "about", loadChildren: "./about.module/about.module#AboutModule" },
  {
    path: "contacts",
    loadChildren: "./contacts.module/contacts.module#ContactsModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
