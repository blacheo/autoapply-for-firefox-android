import { expect, test } from "vitest";
import { PersonalInfoFormStorage } from "../personalInfoFormStorage";
import { PersonalInfo } from "../personalInfo";

test("personal info set/get values", async () => {
    let personalInfo = PersonalInfo.create({firstName: "Brandon", lastName: "L", emailAddress: "b@g.com", phoneNumber: "(111)-111-1111"})
    PersonalInfoFormStorage.setValues(personalInfo)
    let receivedInfo = await PersonalInfoFormStorage.getValues()
    expect(personalInfo == receivedInfo)
})

test("personal info default values are blank", async () => {
    let personalInfo = await PersonalInfoFormStorage.getValues()
    expect(personalInfo.firstName == "")
    expect(personalInfo.lastName == "")
    expect(personalInfo.emailAddress == "")
    expect(personalInfo.phoneNumber == "")
})