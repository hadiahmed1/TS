import { faker } from '@faker-js/faker';

export class User {
    name: string;
    age: number;
    location: {
        lat: number;
        long: number;
    }

    constructor(){
        this.name= faker.person.fullName();
        this.age = Math.floor(Math.random()*80+10);
        this.location = {
            lat: faker.location.latitude(),
            long: faker.location.longitude()
        }
    }
}