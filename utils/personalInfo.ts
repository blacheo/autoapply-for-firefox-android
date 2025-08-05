
export type PersonalInfoInputs = {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string

  addressLine1: string
  addressLine2: string
  cityOrTown: string
  postalCode: string
  provinceOrTerritory: string
  country: string

  workAuthorizationCanada: boolean
  linkedinProfile: string
  howDidYouHearAboutUs: string

}
export type FormDataKeys = keyof PersonalInfoInputs
// Create an array of the keys
export const formDataKeys: FormDataKeys[] = [
  'firstName',
  'lastName',
  'emailAddress',
  'phoneNumber',
  'addressLine1',
  'addressLine2',
  'cityOrTown',
  'postalCode',
  'country',
]

export const booleanDataKeys: FormDataKeys[] = [
  "workAuthorizationCanada"
]

export function camelCaseToSentence(camelCaseStr: string): string {
  return camelCaseStr
    .replace(/([a-z])([A-Z0-9])/g, '$1 $2')
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}

export const personalInfoStorage = storage.defineItem<PersonalInfoInputs>("local:personal_info")

