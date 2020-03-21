import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { SearchComponent } from "./search.component";
import { SearchBlockComponent } from "./components/search-block/search-block.component";
import { HistoryBlockComponent } from "./components/history-block/history-block.component";
import { InfoViewComponent } from "./components/info-view/info-view.component";

import { ReversePipe } from "src/app/pipes/reverse.pipe";

const routes: Routes = [{ path: "", component: SearchComponent }];

@NgModule({
  declarations: [
    SearchComponent,
    SearchBlockComponent,
    HistoryBlockComponent,
    InfoViewComponent,
    ReversePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatCheckboxModule
  ]
})
export class SearchModule {}
