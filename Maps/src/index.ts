/// <reference types="@types/google.maps" />
import { User } from "./User.ts";
import { Company } from "./Company.ts";
import { CustomMap } from "./CustomMap.ts";

console.log("User:>>", new User());
console.log("Company:>>", new Company());

const mapDiv = document.getElementById("map") as HTMLElement;
new CustomMap(mapDiv);