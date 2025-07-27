import { FieldType, getFieldType } from "./fieldType";

function getAnswer(fieldType: FieldType, personalInfo: PersonalInfo) {
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
  }
}

export function autofill(field: HTMLElement, personalInfo: PersonalInfo) {
  const fieldType: FieldType = getFieldType(field)
  const input = field.querySelector(".input")


  const _input = input as HTMLInputElement
  _input.defaultValue = getAnswer(fieldType, personalInfo)
}