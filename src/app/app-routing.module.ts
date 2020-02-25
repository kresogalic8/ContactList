import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./pages/layout/layout.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { ContactDetailsComponent } from "./pages/contact-details/contact-details.component";
import { ContactFormComponent } from "./pages/contact-form/contact-form.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: ContactsComponent
            },
            {
                path: "favorites",
                component: FavoritesComponent
            },
            {
                path: "details/:id",
                component: ContactDetailsComponent
            },
            {
                path: "edit/:id",
                component: ContactFormComponent
            },
            {
                path: "add-contact",
                component: ContactFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
