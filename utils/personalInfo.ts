import { Data } from "dataclass";

export class PersonalInfo extends Data {
    firstName: string = "";
    lastName: string = "";
    emailAddress: string = "";
    phoneNumber: string = "";
}