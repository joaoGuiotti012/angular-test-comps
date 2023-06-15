import { Injector } from "@angular/core";


export class BasePage {
    constructor(injector: Injector) {

    }

    log(message: any) {
        console.log(message);
    }
}