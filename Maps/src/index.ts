/// <reference types="@types/google.maps" />
import { User } from "./User.ts";
import { Company } from "./Company.ts";
import { CustomMap } from "./CustomMap.ts";

const mapDiv = document.getElementById("map") as HTMLElement;
const map =new CustomMap(mapDiv);
const user = new User();
const company = new Company();
map.addMarker(user);
map.addMarker(company);