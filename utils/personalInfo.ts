import { Data } from "dataclass";

export class PersonalInfo extends Data {
    firstName: string = "";
    lastName: string = "";
    emailAddress: string = "";
    phoneNumber: string = "";

    addressLine1: string = "";
    addressLine2: string = "";
    cityOrTown: string = "";
    postalCode: string = "";
    country: string = "";

    onlyFillMandatory: boolean = true;
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
