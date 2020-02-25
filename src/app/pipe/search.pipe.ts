import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "search" })
export class SearchPipe implements PipeTransform {
    transform(data: any, searchText: any): any {
        if (searchText == null || searchText === "") {
            return data;
        } else {
            const filteredResults = [];
            data.filter(term => {
                term.filter((subTerm, index) => {
                    if (index === 1) {
                        if (
                            subTerm
                                .toString()
                                .toLowerCase()
                                .indexOf(searchText.toLowerCase()) !== -1
                        ) {
                            if (filteredResults.indexOf(subTerm) === -1) {
                                filteredResults.push(term);
                            }
                        }
                    }
                });
            });
            return filteredResults;
        }
    }
}
