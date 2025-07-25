import { PersonalInfo } from "./personalInfo"


// Handles storage of personal information
export class PersonalInfoFormStorage {
    private static firstName = storage.defineItem<string>('local:first_name')
    private static lastName = storage.defineItem<string>('local:last_name')
    private static emailAddress = storage.defineItem<string>('local:email_address')
    private static phoneNumber = storage.defineItem<string>('local:phone_number')

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

        let firstName, lastName, emailAddress, phoneNumber, _ = key_values.values()

        return PersonalInfo.create({firstName:firstName, lastName:lastName, emailAddress:emailAddress, phoneNumber:phoneNumber})
    }
}