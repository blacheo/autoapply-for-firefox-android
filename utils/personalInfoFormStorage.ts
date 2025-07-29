import { PersonalInfo } from "./personalInfo"


// Handles storage of personal information
export class PersonalInfoFormStorage {
    private static firstName = storage.defineItem<string>('local:first_name', { fallback: "" })
    private static lastName = storage.defineItem<string>('local:last_name', { fallback: "" })
    private static emailAddress = storage.defineItem<string>('local:email_address', { fallback: "" })
    private static phoneNumber = storage.defineItem<string>('local:phone_number', { fallback: "" })

    private static addressLine1 = storage.defineItem<string>('local:address_line_1', { fallback: "" });
    private static addressLine2 = storage.defineItem<string>('local:address_line_2', { fallback: "" });
    private static cityOrTown = storage.defineItem<string>('local:city_or_town', { fallback: "" });
    private static postalCode = storage.defineItem<string>('local:postal_code', { fallback: "" });
    private static country = storage.defineItem<string>('local:country', { fallback: "" });


    static async setValues(values: PersonalInfo) {
        await storage.setItems([
            { item: this.firstName, value: values.firstName },
            { item: this.lastName, value: values.lastName },
            { item: this.emailAddress, value: values.emailAddress },
            { item: this.phoneNumber, value: values.phoneNumber },
            { item: this.addressLine1, value: values.addressLine1 },
            { item: this.addressLine2, value: values.addressLine2 },
            { item: this.cityOrTown, value: values.cityOrTown },
            { item: this.postalCode, value: values.postalCode },
            { item: this.country, value: values.country }
        ])
    }

    static async getValues(): Promise<PersonalInfo> {
        let key_values = await storage.getItems([
            this.firstName,
            this.lastName,
            this.emailAddress,
            this.phoneNumber,
            this.addressLine1,
            this.addressLine2,
            this.cityOrTown,
            this.postalCode,
            this.country])

        const [firstName,
            lastName,
            emailAddress,
            phoneNumber,
            addressLine1,
            addressLine2,
            cityOrTown,
            country,
        ] = key_values.values()
        console.log(`retrieved values: ${firstName}, ${lastName}, ${emailAddress}, ${phoneNumber}`)
        return PersonalInfo.create({
            firstName: firstName.value,
            lastName: lastName.value,
            emailAddress: emailAddress.value,
            phoneNumber: phoneNumber.value,
            addressLine1: addressLine1.value,
            addressLine2: addressLine2.value,
            cityOrTown: cityOrTown.value,
            country: country.value,
        })
    }
}