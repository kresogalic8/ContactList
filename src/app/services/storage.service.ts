import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class StorageService {
    constructor() {}

    set(name: string, value?: any): void {
        if (!value) {
            window.localStorage.removeItem(name);
        } else {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(name, value);
        }
    }

    get(name: string): any {
        let item = window.localStorage.getItem(name);

        try {
            item = JSON.parse(item);
        } catch (err) {}

        return item || [];
    }

    update(name: string, added: any): void {
        let current: any = window.localStorage.getItem(name);

        try {
            current = JSON.parse(current);
        } catch (err) {}

        if (!current) {
            current = {};
        }
        for (const key in added) {
            current[key] = added[key];
        }

        window.localStorage.setItem(name, JSON.stringify(current));
    }
}
