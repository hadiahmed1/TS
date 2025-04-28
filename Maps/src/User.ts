import { faker } from '@faker-js/faker';
import { Place } from './CustomMap.ts';

export class User implements Place {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor(){
        this.name= faker.person.fullName();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
}