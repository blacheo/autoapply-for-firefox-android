import { Data } from "dataclass";
import { FieldType } from "./fieldType";
import { PersonalInfo } from "./personalInfo";

export class ApplicationField extends Data {
    inputField: HTMLInputElement | null = null;
    fieldType: FieldType = FieldType.FirstName;
}

export abstract class ApplicationForm {
    protected abstract getFields() : ApplicationField[];

    public autofill(personalInfo: PersonalInfo) {
        this.getFields().forEach((appField) => ApplicationForm.autofillField(appField.inputField, appField.fieldType, personalInfo))
    }

    private static autofillField(inputField: HTMLInputElement | null, fieldType: FieldType, personalInfo: PersonalInfo) {
        if (inputField === null) {
            console.log(`Input with field type ${fieldType} is not found.`)
            return;
        }

        if (!(personalInfo.onlyFillMandatory && inputField.getAttribute('required') != "true")){
            console.log("skipping non-mandatory field")
            return;
        }
        inputField.defaultValue = ApplicationForm.getAnswer(fieldType, personalInfo)
    }

    private static getAnswer(fieldType: FieldType, personalInfo: PersonalInfo) {
        switch (fieldType) {
            case FieldType.FirstName:
                return personalInfo.firstName
            case FieldType.LastName:
                return personalInfo.lastName
            case FieldType.Email:
                return personalInfo.emailAddress
            case FieldType.FullName:
                return personalInfo.fullName()
            case FieldType.PhoneNumber:
                return personalInfo.phoneNumber
            case FieldType.AddressLine1:
                return personalInfo.addressLine1
            default:
                throw Error(`Unexpected field type ${fieldType}`)

        }
    }

    public abstract onLoginScreen(): boolean;
}