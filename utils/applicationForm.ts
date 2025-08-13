import { FieldType } from "./fieldType";

export abstract class ApplicationForm {
    protected abstract getFields() : [string, FieldType][];

    public autofill(personalInfo: PersonalInfoInputs) {
        this.getFields().forEach((appField) => ApplicationForm.autofillField(appField[0], appField[1], personalInfo))
    }

    private static autofillField(inputId: string, fieldType: FieldType, personalInfo: PersonalInfoInputs) {
        const inputField = document.getElementById(inputId) as HTMLInputElement | null
        if (inputField === null) {
            console.log(`Input with field type ${fieldType} is not found.`)
            return;
        }

        inputField.defaultValue = ApplicationForm.getAnswer(fieldType, personalInfo)
    }

    private static getAnswer(fieldType: FieldType, personalInfo: PersonalInfoInputs) {
        switch (fieldType) {
            case FieldType.FirstName:
                return personalInfo.firstName
            case FieldType.LastName:
                return personalInfo.lastName
            case FieldType.Email:
                return personalInfo.emailAddress
            case FieldType.FullName:
                return `${personalInfo.firstName} ${personalInfo.lastName}`
            case FieldType.PhoneNumber:
                return personalInfo.phoneNumber
            case FieldType.AddressLine1:
                return personalInfo.addressLine1
            case FieldType.City:
                return personalInfo.cityOrTown
            case FieldType.PhoneType:
                return "Mobile"
            case FieldType.PostalCode:
                return personalInfo.phoneNumber
            default:
                throw Error(`Unexpected field type ${fieldType}`)

        }
    }

    public abstract onLoginScreen(): boolean;
}