import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";

import { ContactsComponent } from "./contacts.component";

const routes: Routes = [{ path: "", component: ContactsComponent }];

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ContactsModule {}
