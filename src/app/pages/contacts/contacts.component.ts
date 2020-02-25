import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: "app-contacts",
    templateUrl: "./contacts.component.html",
    styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
    contacts = [];

    constructor(private storage: StorageService) {}

    ngOnInit() {
        this.contacts = this.storage.get("contacts");
        console.log(this.contacts);
    }
}
