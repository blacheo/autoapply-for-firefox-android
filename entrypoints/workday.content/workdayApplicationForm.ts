
import { ApplicationForm } from "@/utils/applicationForm"

// AKA given name


export class WorldayApplicationForm extends ApplicationForm {
    public onLoginScreen(): boolean {
        const viewHeading = document.getElementById("authViewTitle");
        const vH = (viewHeading as HTMLHeadingElement);
        return vH != null;
    }
    protected getFields() {
        const fields: [string, FieldType][] = [
            ["name--legalName--firstName", FieldType.FirstName],
            ["name--legalName--lastName", FieldType.LastName],
            ["address--addressLine1", FieldType.AddressLine1],
            ["address--city", FieldType.City],
            ["address--postalCode", FieldType.PostalCode],
            ["phoneNumber--phoneNumber", FieldType.PhoneNumber],
            ["phoneNumber--phoneType", FieldType.PhoneType]
        ]
        

        return fields
    }

}