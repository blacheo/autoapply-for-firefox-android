class ResumeStorage {
    private static resumeName = storage.defineItem<string>('local:resume_name', { fallback: "" })


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

    static async setResumeName(name : string) {
        await ResumeStorage.resumeName.setValue(name);
    }

    // submitted resumes will use this file name
    getResumeDefaultName() {

    }

    
}