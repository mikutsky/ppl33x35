import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./app-header.component/header.component";
import { FooterComponent } from "./app-footer.component/footer.component";
import { BannerBlockComponent } from "./banner-block.component/banner-block.component";
import { SearchBlockComponent } from "./search-block.component/search-block.component";
import { HistoryBlockComponent } from "./history-block.component/history-block.component";
import { InfoViewComponent } from "./info-view.component/info-view.component";
import { MessageBoxComponent } from "./message-box.component/message-box.component";

import { StorageService } from "./services/storage.service";
import { ContainerService } from "./services/container.service";
import { MessageService } from "./services/message.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerBlockComponent,
    SearchBlockComponent,
    HistoryBlockComponent,
    InfoViewComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatCheckboxModule
  ],
  providers: [ContainerService, StorageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
