import { faker } from "@faker-js/faker";
import { User } from "./User.ts";
export class Company extends User {
    catchPhrase: string;
    constructor() {
        super();
        this.name= faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
    }
}