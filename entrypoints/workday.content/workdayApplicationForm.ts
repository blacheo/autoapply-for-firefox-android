import { FieldType } from "#imports"
import { ApplicationField, ApplicationForm } from "@/utils/applicationForm"

// AKA given name
const firstNameInput = document.getElementById("name--legalName--firstName") as HTMLInputElement

const lastNameInput = document.getElementById("name--legalName--lastName") as HTMLInputElement

const addressLine1Input = document.getElementById("address--addressLine1") as HTMLInputElement

const viewHeading = document.getElementById("authViewTitle");
const loginScreenLabel = document.getElementById("")

export class WorldayApplicationForm extends ApplicationForm {
    public onLoginScreen(): boolean {
        const vH = (viewHeading as HTMLHeadingElement);
        return vH != null;
    }
    protected getFields(): ApplicationField[] {
        const firstNameField = ApplicationField.create({inputField: firstNameInput, fieldType: FieldType.FirstName});
        const lastNameField = ApplicationField.create({inputField: lastNameInput, fieldType: FieldType.LastName});
        const addressLine1Field = ApplicationField.create({inputField: addressLine1Input, fieldType: FieldType.addressLine1});
        return [firstNameField, lastNameField, addressLine1Field]
    }

}