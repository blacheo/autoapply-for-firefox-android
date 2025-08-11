import { PickerValue } from "@mui/x-date-pickers/internals";

export const experiencesStorage = storage.defineItem<Experience[]>("local:experiences")
export type Experience = {
    startDate: PickerValue;
    endDate: PickerValue;
    jobTitle: string;
    company: string;
    city: string;
    type: string;
    description: string;
};
