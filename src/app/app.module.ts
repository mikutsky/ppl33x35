import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { HomeModule } from "./home.module/home.module";
import { SearchModule } from "./search.module/search.module";
import { AboutModule } from "./about.module/about.module";
import { ContactsModule } from "./contacts.module/contacts.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/app-header/header.component";
import { FooterComponent } from "./components/app-footer/footer.component";
import { MessageBoxComponent } from "./components/app-message-box/message-box.component";

import { StorageService } from "./services/storage.service";
import { ContainerService } from "./services/container.service";
import { MessageService } from "./services/message.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    AboutModule,
    ContactsModule,
    MatIconModule
  ],
  providers: [ContainerService, StorageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
