export enum FieldType {
    FirstName,
    LastName,
    PhoneNumber,
    Email,
    FullName,
}

export function getFieldType(field: HTMLElement) : FieldType{
    if (field.children) {

    }
    return FieldType.FirstName

}