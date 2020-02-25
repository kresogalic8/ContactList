import { Component, OnInit } from "@angular/core";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: "app-favorites",
    templateUrl: "./favorites.component.html",
    styleUrls: ["./favorites.component.scss"]
})
export class FavoritesComponent implements OnInit {
    favorites = [];
    searchText = "";

    constructor(private storage: StorageService) {}

    ngOnInit() {
        this.favorites = this.storage.get("contacts").filter(a => a.favorite);
        console.log(this.favorites);
    }
}
