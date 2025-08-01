

export class ResumeStorage {
    private static resumeName = storage.defineItem<string>('local:resume_name', { fallback: "" })
    public static resume = storage.defineItem<File>('local:resume')

    static async getResumeName() {
        const name = await ResumeStorage.resumeName.getValue()

        if (name === "") {
            const personalInfo = await PersonalInfoFormStorage.getValues()

            if (personalInfo.firstName !== "" && personalInfo.lastName !== "") {
                const defaultName = `${personalInfo.firstName}_${personalInfo.lastName}`;
                await ResumeStorage.resumeName.setValue(defaultName);
                return defaultName;
            }
        }

        return name;
    }

    static async setResumeName(name: string) {
        await ResumeStorage.resumeName.setValue(name);
    }

    static async uploadResume(file: File) {
        await this.resume.setValue(file)
    }


}