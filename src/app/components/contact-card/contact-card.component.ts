import { Component, OnInit, Input } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: "app-contact-card",
    templateUrl: "./contact-card.component.html",
    styleUrls: ["./contact-card.component.scss"]
})
export class ContactCardComponent implements OnInit {
    @Input() contact = null;

    constructor(private storage: StorageService) {}

    ngOnInit() {}

    favorite(e) {
        e.stopPropagation();

        const contacts = this.storage.get("contacts").filter(ele => {
            if (ele.id === this.contact.id) {
                ele.favorite = ele.favorite ? false : true;
            }
            return ele;
        });

        if (this.contact.favorite) {
            this.contact.favorite = false;
        } else {
            this.contact.favorite = true;
        }

        this.storage.set("contacts", contacts);
    }
}
