import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { StorageService } from "src/app/services/storage.service";
import { v4 as uuidv4 } from "uuid";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-contact-form",
    templateUrl: "./contact-form.component.html",
    styleUrls: ["./contact-form.component.scss"]
})
export class ContactFormComponent implements OnInit {
    form: FormGroup;
    isEdit = false;

    constructor(
        private fb: FormBuilder,
        private storage: StorageService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.buildForm();

        this.route.params.subscribe(res => {
            if (res.id) {
                this.isEdit = res.id;
                const contact = this.storage
                    .get("contacts")
                    .find(a => a.id === res.id);
                this.buildForm(contact);
            }
        });
    }

    addNewNumber() {
        const add = this.form.get("numbers") as FormArray;
        add.push(
            this.fb.group({
                value: "",
                type: ""
            })
        );
    }

    deleteNumber(index: number) {
        const add = this.form.get("numbers") as FormArray;
        add.removeAt(index);
    }

    saveContact() {
        const contacts = this.storage.get("contacts") || [];
        contacts.push(this.form.value);
        this.storage.set("contacts", contacts);
        this.router.navigate(["/"]);
    }

    updateContact() {
        // this.storage.set("contacts", contacts);
        // this.router.navigate(["/"]);
    }

    buildForm(data?: any) {
        this.form = this.fb.group({
            fullName: "",
            email: "",
            numbers: this.fb.array([
                this.fb.group({
                    value: "",
                    type: ""
                })
            ]),
            id: uuidv4(),
            favorite: false
        });

        if (data) {
            this.form.patchValue(data);
        }
    }
}
