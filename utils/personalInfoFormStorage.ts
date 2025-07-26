import { PersonalInfo } from "./personalInfo"


// Handles storage of personal information
export class PersonalInfoFormStorage {
    private static firstName = storage.defineItem<string>('local:first_name', {fallback: ""})
    private static lastName = storage.defineItem<string>('local:last_name', {fallback: ""})
    private static emailAddress = storage.defineItem<string>('local:email_address', {fallback: ""})
    private static phoneNumber = storage.defineItem<string>('local:phone_number', {fallback: ""})

    static async setValues(values: PersonalInfo) {
        await storage.setItems([
            {item: this.firstName, value: values.firstName},
            {item: this.lastName, value: values.lastName},
            {item: this.emailAddress, value: values.emailAddress},
            {item: this.phoneNumber, value: values.phoneNumber},
        ])
    }

    static async getValues() : Promise<PersonalInfo>{
        let key_values = await storage.getItems([this.firstName, this.lastName, this.emailAddress, this.phoneNumber])

        const [firstName, lastName, emailAddress, phoneNumber] = key_values.values()
        console.log(`retrieved values: ${firstName}, ${lastName}, ${emailAddress}, ${phoneNumber}`)
        return PersonalInfo.create({firstName:firstName.value, lastName:lastName.value, emailAddress:emailAddress.value, phoneNumber:phoneNumber.value})
    }
}