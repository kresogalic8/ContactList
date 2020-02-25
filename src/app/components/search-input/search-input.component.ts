import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-search-input",
    templateUrl: "./search-input.component.html",
    styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit {
    @Output() onSearch = new EventEmitter();

    searchText = "";

    constructor() {}

    ngOnInit() {}

    search() {
        this.onSearch.emit(this.searchText);
    }
}
