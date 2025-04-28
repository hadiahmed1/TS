/// <reference types="@types/google.maps" />
import {User} from "./User.ts";
import {Company} from "./Company.ts"

export interface Place {
    location:{
        lat: number,
        lng: number
    }
}

export class CustomMap {
    private googleMap : google.maps.Map;
    constructor(mapDiv: HTMLElement){
        this.googleMap = new google.maps.Map(mapDiv, { zoom: 1, center: { lat: 0, lng: 0 } });
    }

    addMarker (user :Place):void {
        const marker =new google.maps.Marker({
            map: this.googleMap,
            position: user.location
        });
    }
}