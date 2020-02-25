import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { ContactDetailsComponent } from "./pages/contact-details/contact-details.component";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";
import { ContactCardComponent } from "./components/contact-card/contact-card.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ConfirmationDialogComponent } from "./components/confirmation-dialog/confirmation-dialog.component";
import { SearchPipe } from "./pipe/search.pipe";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ContactsComponent,
        FavoritesComponent,
        ContactDetailsComponent,
        ContactFormComponent,
        ContactCardComponent,
        SearchInputComponent,
        NavigationComponent,
        ConfirmationDialogComponent,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
